package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.CityDTO;
import nocountry.ecommerce.dto.ProvinceDTO;
import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.services.ICityService;
import nocountry.ecommerce.services.IProvinceService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/cities")
@RequiredArgsConstructor
public class CityController {
    private final ICityService service;
    @Qualifier("defaultMapper")
    private final ModelMapper mapper;
    @Operation(summary="Lista las ciudades de la provincia pasada como parametro.")
    @GetMapping("/province/{idProvince}")
    public ResponseEntity<List<CityDTO>> findByCountry(@PathVariable("idProvince") Integer id){
        List<CityDTO> list = service.getByIdProvince(id).stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    private CityDTO convertToDto(City obj) {
        return mapper.map(obj, CityDTO.class);
    }

}
