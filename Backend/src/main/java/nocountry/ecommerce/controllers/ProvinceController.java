package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.ProvinceDTO;
import nocountry.ecommerce.models.Province;
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
@RequestMapping("/provinces")
@RequiredArgsConstructor
public class ProvinceController {
    private final IProvinceService service;
    @Qualifier("defaultMapper")
    private final ModelMapper mapper;
    @Operation(summary="Lista las provincias del pais pasado como parametro.")
    @GetMapping("/country/{idCountry}")
    public ResponseEntity<List<ProvinceDTO>> findByCountry(@PathVariable("idCountry") Integer id){
        List<ProvinceDTO> list = service.getByIdCountry(id).stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    private ProvinceDTO convertToDto(Province obj) {
        return mapper.map(obj, ProvinceDTO.class);
    }

}
