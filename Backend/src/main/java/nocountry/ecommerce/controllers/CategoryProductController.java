package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.CategoryHouseRoomsDTO;
import nocountry.ecommerce.dto.CategoryProductDTO;
import nocountry.ecommerce.models.CategoryHouseRooms;
import nocountry.ecommerce.models.CategoryProduct;
import nocountry.ecommerce.services.ICategoryHouseRoomsService;
import nocountry.ecommerce.services.ICategoryProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/categoryProduct")
@RequiredArgsConstructor
public class CategoryProductController {

    private final ICategoryProductService service;
    @Qualifier("defaultMapper")
    private final ModelMapper mapper;
    @Operation(summary="Lista todos las categorias de tipo de productos.")
    @GetMapping("/list")
    public ResponseEntity<List<CategoryProductDTO>> findAll() {
        List<CategoryProductDTO> list = service.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    private CategoryProductDTO convertToDto(CategoryProduct obj) {
        return mapper.map(obj, CategoryProductDTO.class);
    }

}
