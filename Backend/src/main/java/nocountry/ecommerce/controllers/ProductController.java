package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.*;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.ProductImage;
import nocountry.ecommerce.services.IProductService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final IProductService service;
    //private final IProductImageService serviceImage;
    @Qualifier("productResponseMapper")
    private final ModelMapper mapper;

    @Operation(summary = "Filtrado de Productos Publicados de acuerdo a ambiente, tipo, estado, precio desde, precio hasta, o ciudad.")
    @GetMapping("/search/filters/{idCategoryHouseRooms}/{idCategoryProduct}/{idCategoryStatus}/{priceFrom}/{priceTo}/{IdCiudad}")
    public ResponseEntity<List<ProductResponseDTO>> searchPublishProducts(@RequestParam(value = "idCategoryHouseRooms", required = false) Integer idCategoryHouseRooms,
                                                                          @RequestParam(value = "idCategoryProduct", required = false) Integer idCategoryProduct,
                                                                          @RequestParam(value = "idCategoryStatus", required = false) Integer idCategoryStatus,
                                                                          @RequestParam(value = "priceFrom", required = false) Double priceFrom,
                                                                          @RequestParam(value = "priceTo", required = false) Double priceTo,
                                                                          @RequestParam(value = "idCity", required = false) Integer idCity
    ) {
        List<Product> list = service.getByFilters(idCategoryHouseRooms, idCategoryProduct, idCategoryStatus, priceFrom, priceTo, idCity).stream().toList();


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

    @PostMapping("/saveProduct")
    public ResponseEntity<Void> save(@Valid @RequestBody ProductRequestDTO dto){

        Product obj = service.save(this.convertRequestToEntity(dto));
/*
        for (MultipartFile imageFile : ProductRequestDTO.getPhotos()) {
            try {
                byte[] imageData = imageFile.getBytes();
                //ProductImage imag = new ProductImage();
                //imag.setImagePath();
               // imag.setImagePath();
               // imag.setProduct(obj);
               // serviceImage.save(imag);
                //Image image = new Image();
                //image.setData(imageData);
                //imageRepository.save(image);
            } catch (IOException e) {
                // Handle the exception
            }
            ]*/


        //return product.getId();
        //  Product obj = service.save(this.convertToEntity(dto));
          URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdProduct()).toUri();
        return ResponseEntity.created(location).build();
    }
  /*  @GetMapping("/search/filters")
    public ResponseEntity<List<ProductDTO>> searchPublishProducts(@RequestBody ProductFilterDTO filterDTO )
    {
        List<ProductDTO> list = service.getByFilters(filterDTO.getIdCategoryHouseRooms(),
                        filterDTO.getIdCategoryProduct(),
                        filterDTO.getIdCategoryStatus(),
                        filterDTO.getPriceFrom(),
                        filterDTO.getPriceTo(),
                        filterDTO.getIdCity()
                        )
                .stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    */

    private ProductResponseDTO convertToDto(Product obj) {
        return mapper.map(obj, ProductResponseDTO.class);
    }

    private Product convertRequestToEntity(ProductRequestDTO obj) {
        return mapper.map(obj, Product.class);
    }


}
