package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.*;
import nocountry.ecommerce.exception.CustomErrorResponse;
import nocountry.ecommerce.exception.InvalidImageException;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.ProductImage;
import nocountry.ecommerce.services.ICloudinaryService;
import nocountry.ecommerce.services.IProductImageService;
import nocountry.ecommerce.services.IProductService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final IProductService service;
    private final IProductImageService serviceImage;

   private final ICloudinaryService cloudinaryService;

    //private final IProductImageService serviceImage;
    @Qualifier("productResponseMapper")
    private final ModelMapper mapper;

    @Operation(summary = "Filtrado de Productos Publicados de acuerdo a ambiente, tipo, estado, precio desde, precio hasta, o ciudad.")
    @PostMapping("/search/filters")
    public ResponseEntity<List<ProductResponseDTO>> searchPublishProducts(@RequestBody FilterProductDTO dto)
    {
        List<Product> list = service.getByFilters(dto.getIdCategoryHouseRooms(), dto.getIdCategoryProduct(), dto.getIdCategoryStatus(), dto.getPriceFrom(), dto.getPriceTo(), dto.getIdCity()).stream().toList();
        List<ProductResponseDTO> consultDTOS = mapper.map(list, new TypeToken<List<ProductResponseDTO>>() {
        }.getType());
        return new ResponseEntity<>(consultDTOS, HttpStatus.OK);
    }

    @Operation(summary="Lista el detalle de un producto Publicado pasado por parametro.")
    @GetMapping("/{idProduct}")
    public ResponseEntity<ProductResponseDTO> findById(@PathVariable("idProduct") Integer id){
        ProductResponseDTO prod = convertToDto(service.findByIdProductAndActive(id, true));
        return new ResponseEntity<>(prod, HttpStatus.OK);
    }

    @Operation(summary="Lista los Productos Publicados Destacados")
    @GetMapping("/highlight")
    public ResponseEntity<List<ProductResponseDTO>> findHighlight(){
        List<ProductResponseDTO> list = service.findByHighlightAndActive(true, true).stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
   // @PostMapping(value = "/saveProduct", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)

    @RequestMapping(path = "/saveProduct", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    //@RequestMapping(path = "/saveProduct", method = "POST", consumes = { "multipart/form-data" })
   //public ResponseEntity<List<String>> save(@Valid @RequestBody ProductRequestDTO dto){
    public ResponseEntity<List<String>> save(@Valid @RequestPart ProductRequestDTO dto,
                                             @RequestParam("fotos") @NotNull @NotBlank MultipartFile[] fotos) {
        BufferedImage bi;
        //System.out.println("Request contains, Files count: " + multipartFile.length);
        List<String> lista = new ArrayList<>();
       // Arrays.asList(dto.getPhotos()).forEach(imageFile -> {
        for (MultipartFile imageFile : fotos){
            try {
                /*bi = ImageIO.read(imageFile.getInputStream());
                if(bi == null){
                    //return new ResponseEntity(new Mensaje("imagen no válida"), HttpStatus.BAD_REQUEST);
                    throw new InvalidImageException("imagen no válida");
                }*/
                Map result = cloudinaryService.upload(imageFile);
                System.out.println(result.get("original_filename"));
                System.out.println(result.get("url"));
                System.out.println(result.get("public_id"));
                lista.add(result.get("url").toString());
            } catch (IOException e) {
                // Handle the exception
            }
        };
        //Product obj = service.save(this.convertRequestToEntity(dto));
       //   URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdProduct()).toUri();
        //return ResponseEntity.created(location).build();
        return new ResponseEntity(lista, HttpStatus.OK);
    }

/*
    @GetMapping("/list")
    public ResponseEntity<List<Imagen>> list(){
        List<Imagen> list = imagenService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
*/
    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam MultipartFile multipartFile)throws IOException {
        BufferedImage bi = ImageIO.read(multipartFile.getInputStream());
        if(bi == null){
            //return new ResponseEntity(new Mensaje("imagen no válida"), HttpStatus.BAD_REQUEST);
            CustomErrorResponse errorResponse = new CustomErrorResponse(LocalDateTime.now(), "imagen no valida", null);
        }
        Map result = cloudinaryService.upload(multipartFile);
        System.out.println(result.get("original_filename"));
        System.out.println(result.get("url"));
        System.out.println(result.get("public_id"));

         return new ResponseEntity(result, HttpStatus.OK);
    }


    private ProductResponseDTO convertToDto(Product obj) {
        return mapper.map(obj, ProductResponseDTO.class);
    }

    private Product convertRequestToEntity(ProductRequestDTO obj) {
        return mapper.map(obj, Product.class);
    }


}
