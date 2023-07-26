package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.ProductDTO;
import nocountry.ecommerce.dto.RatingDTO;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.ProductImage;
import nocountry.ecommerce.models.Rating;
import nocountry.ecommerce.services.IRatingService;
import nocountry.ecommerce.services.ISaleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/ratings")
@RequiredArgsConstructor
public class RatingController {
    private final IRatingService service;
    @Qualifier("defaultMapper")
    private final ModelMapper mapper;

    @Operation(summary="Registra una calificacion de una venta")
    @PostMapping( )
    public ResponseEntity<RatingDTO> save(@Valid @RequestBody RatingDTO dto) {
       // System.out.println(this.convertToEntity(dto).getUser().getIdUser());
       Integer sal = dto.getIdSale();
        Rating obj =   service.save(this.convertToEntity(dto), sal);
        return new ResponseEntity<>(this.convertToDTO(obj), HttpStatus.OK);
    }

    @Operation(summary="Lista las calificaciones de un vendedor.")
    @GetMapping("/{idUser}")
    public ResponseEntity<List<RatingDTO>> findByIdUser(@PathVariable("idUser") Integer id){
        List<RatingDTO> prod = service.findByIdUser(id).stream().map(this::convertToDTO).collect(Collectors.toList());;
        return new ResponseEntity<>(prod, HttpStatus.OK);
    }

    @Operation(summary="Lista el promedio de puntuaciones de un vendedor.")
    @GetMapping("/average/{idUser}")
    public ResponseEntity<Double> findAverage(@PathVariable("idUser") Integer id){
        Double prod = service.findAverage(id);;
        return new ResponseEntity<>(prod, HttpStatus.OK);
    }
    private Rating convertToEntity(RatingDTO obj) {
        return mapper.map(obj, Rating.class);
    }
    private RatingDTO convertToDTO(Rating obj) {
        return mapper.map(obj, RatingDTO.class);
    }

}
