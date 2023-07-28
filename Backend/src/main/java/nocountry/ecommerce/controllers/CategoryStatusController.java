package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.CategoryProductDTO;
import nocountry.ecommerce.dto.CategoryStatusDTO;
import nocountry.ecommerce.models.CategoryProduct;
import nocountry.ecommerce.models.CategoryStatus;
import nocountry.ecommerce.services.ICategoryProductService;
import nocountry.ecommerce.services.ICategoryStatusService;
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
@RequestMapping("/categoryStatus")
@RequiredArgsConstructor
public class CategoryStatusController {

    private final ICategoryStatusService service;
    @Qualifier("defaultMapper")
    private final ModelMapper mapper;
    @Operation(summary="Lista todos las categorias de estado del mueble.")
    @GetMapping("/list")
    public ResponseEntity<List<CategoryStatusDTO>> findAll() {
        List<CategoryStatusDTO> list = service.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    private CategoryStatusDTO convertToDto(CategoryStatus obj) {
        return mapper.map(obj, CategoryStatusDTO.class);
    }

}
