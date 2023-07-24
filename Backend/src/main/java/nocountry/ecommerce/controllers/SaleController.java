package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.ProductDTO;
import nocountry.ecommerce.dto.SaleDTO;
import nocountry.ecommerce.models.Sale;
import nocountry.ecommerce.models.SaleDetail;
import nocountry.ecommerce.models.SaleDetail;
import nocountry.ecommerce.services.IProductImageService;
import nocountry.ecommerce.services.IProductService;
import nocountry.ecommerce.services.ISaleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
public class SaleController {

    private final ISaleService service;
    @Qualifier("saleMapper")
    private final ModelMapper mapper;

    @Operation(summary="Registra una operacion de reserva")
    @PostMapping( "/create")
    public ResponseEntity<SaleDTO> save(@Valid @RequestBody SaleDTO dto) {
        Sale sale =   service.save(this.convertToEntity(dto));
        //System.out.println(prod);
         List<SaleDetail> det = mapper.map(dto.getDetails(), new TypeToken<List<SaleDetail>>(){}.getType());

        Sale obj = service.saveTransactional(sale, det);
        //Sale obj = service.save(sale);
        return new ResponseEntity<>(this.convertToDto(obj), HttpStatus.OK);
    }
    @Operation(summary="Cierra una venta")
    @PostMapping( "/finish")
    public ResponseEntity<SaleDTO> finish(@Valid @RequestBody SaleDTO dto) {
        dto.setStatus("CERRADO");
        Sale obj =   service.save(this.convertToEntity(dto));
        return new ResponseEntity<>(this.convertToDto(obj), HttpStatus.OK);
    }
    @Operation(summary="Cancela una venta")
    @PostMapping( "/cancel")
    public ResponseEntity<Void> cancel(@Valid @RequestBody SaleDTO dto) {

        service.cancelTransactional(this.convertToEntity(dto));
        // return new ResponseEntity<>(Void, HttpStatus.OK);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/{id}")
    public ResponseEntity<SaleDTO> findById(@PathVariable("id") Integer id){
        SaleDTO dto = this.convertToDto(service.findById(id));
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

  /*  @GetMapping("/buyedlist")
    public ResponseEntity<List<SaleDTO>> findByBuyedList(@PathVariable("id") Integer id){
       // List<SaleDTO> dto = this.convertToDto(service.findByStatus("RESERVADO"));
        List<SaleDTO> dto = service.findByStatus("RESERVADO",id).stream().map(this::convertToDto).collect(Collectors.toList());

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
*/
    @GetMapping("/selledlist/{id}")
    public ResponseEntity<List<SaleDTO>> findListSell(@PathVariable("id") Integer id){
        // List<SaleDTO> dto = this.convertToDto(service.findByStatus("RESERVADO"));
        List<SaleDTO> dto = service.findSellByStatus("RESERVADO", id).stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @GetMapping("/buyedlist/{id}")
    public ResponseEntity<List<SaleDTO>> findListBuy(@PathVariable("id") Integer id){
        // List<SaleDTO> dto = this.convertToDto(service.findByStatus("RESERVADO"));
        List<SaleDTO> dto = service.findBuyByStatus("RESERVADO", id).stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }


    private SaleDTO convertToDto(Sale obj){
        return mapper.map(obj, SaleDTO.class);
    }

    private Sale convertToEntity(SaleDTO dto){
        return mapper.map(dto, Sale.class);
    }
}
