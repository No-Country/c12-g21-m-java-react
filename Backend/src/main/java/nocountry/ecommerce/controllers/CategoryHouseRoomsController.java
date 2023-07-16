package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.CategoryHouseRoomsDTO;
import nocountry.ecommerce.dto.CountryDTO;
import nocountry.ecommerce.models.CategoryHouseRooms;
import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.services.ICategoryHouseRoomsService;
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
@RequestMapping("/categoryHouseRooms")
@RequiredArgsConstructor
public class CategoryHouseRoomsController {

    private final ICategoryHouseRoomsService service;
    @Qualifier("defaultMapper")
    private final ModelMapper mapper;
    @Operation(summary="Lista todos las categorias de ambientes de productos.")
    @GetMapping("/list")
    public ResponseEntity<List<CategoryHouseRoomsDTO>> findAll() {
        List<CategoryHouseRoomsDTO> list = service.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    private CategoryHouseRoomsDTO convertToDto(CategoryHouseRooms obj) {
        return mapper.map(obj, CategoryHouseRoomsDTO.class);
    }

}
