package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.CountryDTO;
import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.services.ICountryService;
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
@RequestMapping("/countries")
@RequiredArgsConstructor
public class CountryController {
    private final ICountryService service;
    @Qualifier("defaultMapper")
    private final ModelMapper mapper;
    @Operation(summary="Lista todos los paises.")
    @GetMapping
    public ResponseEntity<List<CountryDTO>> findAll() {
        List<CountryDTO> list = service.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    private CountryDTO convertToDto(Country obj) {
        return mapper.map(obj, CountryDTO.class);
    }

}
