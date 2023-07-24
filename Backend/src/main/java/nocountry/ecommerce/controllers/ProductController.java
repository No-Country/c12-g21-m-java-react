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

    @Qualifier("productResponseMapper")
    private final ModelMapper mapper;

    @Operation(summary = "Filtrado de Productos Publicados de acuerdo a ambiente, tipo, estado, precio desde, precio hasta, o ciudad.")
    @PostMapping("/search/filters")
    public ResponseEntity<List<ProductDTO>> searchPublishProducts(@RequestBody FilterProductDTO dto)
    {
        List<Product> list = service.getByFilters(dto.getIdCategoryHouseRooms(), dto.getIdCategoryProduct(), dto.getIdCategoryStatus(), dto.getPriceFrom(), dto.getPriceTo(), dto.getIdCity()).stream().toList();
        List<ProductDTO> consultDTOS = mapper.map(list, new TypeToken<List<ProductDTO>>() {
        }.getType());
        return new ResponseEntity<>(consultDTOS, HttpStatus.OK);
    }

    @Operation(summary="Lista el detalle de un producto Publicado pasado por parametro.")
    @GetMapping("/{idProduct}")
    public ResponseEntity<ProductDTO> findById(@PathVariable("idProduct") Integer id){
        ProductDTO prod = convertToDTOProduct(service.findByIdProductAndActive(id, true));
        return new ResponseEntity<>(prod, HttpStatus.OK);
    }

    @Operation(summary="Lista los Productos Publicados Destacados")
    @GetMapping("/highlight")
    public ResponseEntity<List<ProductDTO>> findHighlight(){
        List<ProductDTO> list = service.findByHighlightAndActive(true, true).stream().map(this::convertToDTOProduct).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
   // @PostMapping(value = "/saveProduct", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)

    @Operation(summary="Inserta un nuevo producto")
    @PostMapping( "/saveProduct")
    public ResponseEntity<ProductDTO> save(@Valid @RequestBody ProductDTO dto) {
         Product prod =   service.save(this.convertToProduct(dto));
        System.out.println(prod);
        List<ProductImage> fotos = mapper.map(dto.getPhotos(), new TypeToken<List<ProductImage>>(){}.getType());
        Product obj = service.saveTransactional(prod, fotos);
        return new ResponseEntity<>(this.convertToDTOProduct(obj), HttpStatus.OK);

    }
    @Operation(summary="Actualiza un producto")
    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> update(@Valid @PathVariable("id") Integer id, @RequestBody ProductDTO dto){
        dto.setIdProduct(id);
        Product obj = service.update(this.convertToProduct(dto), id);
        return new ResponseEntity<>(this.convertToDTOProduct(obj), HttpStatus.OK);
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
            CustomErrorResponse errorResponse = new CustomErrorResponse(LocalDateTime.now(), "imagen no valida", null);
        }
        Map result = cloudinaryService.upload(multipartFile);
      //  System.out.println(result.get("original_filename"));
       // System.out.println(result.get("url"));
       // System.out.println(result.get("public_id"));

         return new ResponseEntity(result, HttpStatus.OK);
    }
    @GetMapping("/publishedlist/{id}")
    public ResponseEntity<List<ProductDTO>> findListPublish(@PathVariable("id") Integer id){
        // List<SaleDTO> dto = this.convertToDto(service.findByStatus("RESERVADO"));
        List<ProductDTO> dto = service.findPublish(id).stream().map(this::convertToDTOProduct).collect(Collectors.toList());
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    private ProductResponseDTO convertToDto(Product obj) {
        return mapper.map(obj, ProductResponseDTO.class);
    }
    private Product convertToProduct(ProductDTO obj) {
        return mapper.map(obj, Product.class);
    }
    private ProductDTO convertToDTOProduct(Product obj) {
        return mapper.map(obj, ProductDTO.class);
    }

    private Product convertRequestToEntity(ProductRequestDTO obj) {
        return mapper.map(obj, Product.class);
    }


}
