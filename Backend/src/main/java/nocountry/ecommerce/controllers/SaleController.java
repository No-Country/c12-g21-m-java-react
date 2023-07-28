package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.ProductDTO;
import nocountry.ecommerce.dto.SaleDTO;
import nocountry.ecommerce.models.*;
import nocountry.ecommerce.models.SaleDetail;
import nocountry.ecommerce.services.IProductImageService;
import nocountry.ecommerce.services.IProductService;
import nocountry.ecommerce.services.ISaleService;
import nocountry.ecommerce.utils.EmailUtil;
import nocountry.ecommerce.utils.Mail;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
public class SaleController {

    private final ISaleService service;
    @Qualifier("saleMapper")
    private final ModelMapper mapper;

    private final EmailUtil emailUtil;

    private final IProductService servicePro;

    @Operation(summary="Registra una operacion de reserva")
    @PostMapping( "/create")
    public ResponseEntity<SaleDTO> save(@Valid @RequestBody SaleDTO dto) {
        Sale sale =   service.save(this.convertToEntity(dto));
         List<SaleDetail> det = mapper.map(dto.getDetails(), new TypeToken<List<SaleDetail>>(){}.getType());
        Sale obj = service.saveTransactional(sale, det);

        for (SaleDetail element : obj.getDetails()) {
            Product pro = servicePro.findById(element.getProduct().getIdProduct());

           String nom = pro.getUser().getUserPerson().getFirstName();
           String ape =pro.getUser().getUserPerson().getLastName();
          String tit = pro.getTitle();
          String ema = pro.getUser().getEmail();
            try {
                sendMail(nom, ape, ema, tit);
            } catch (Exception e) {
                //  throw new RuntimeException(e);
            }
            // Code to be executed for each element
        }


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
        return ResponseEntity.ok().build();
    }
    @Operation(summary="Lista la informacion de una venta enviada como parametro")
    @GetMapping("/{id}")
    public ResponseEntity<SaleDTO> findById(@PathVariable("id") Integer id){
        SaleDTO dto = this.convertToDto(service.findById(id));
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @Operation(summary="Lista los productos vendidos por un usuario")
    @GetMapping("/selledlist/{id}")
    public ResponseEntity<List<SaleDTO>> findListSell(@PathVariable("id") Integer id){
        List<SaleDTO> dto = service.findSellByStatus("RESERVADO", id).stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @Operation(summary="Lista los prodcutos comprados por un usuario")
    @GetMapping("/buyedlist/{id}")
    public ResponseEntity<List<SaleDTO>> findListBuy(@PathVariable("id") Integer id){
        List<SaleDTO> dto = service.findBuyByStatus("RESERVADO", id).stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    private void sendMail(String name, String lastname, String email, String productname) throws Exception {
        Mail mail = new Mail();
        mail.setFrom("rehouseweb@gmail.com");
        // mail.setTo(us.getUsername());
        mail.setTo(email);
        mail.setSubject("ReHouse - Aviso Nueva Venta");

        Map<String, Object> model = new HashMap<>();
        model.put("user", name+" "+ lastname);
        model.put("product", productname);
        mail.setModel(model);

        emailUtil.sendMail(mail);
    }

    private SaleDTO convertToDto(Sale obj){
        return mapper.map(obj, SaleDTO.class);
    }

    private Sale convertToEntity(SaleDTO dto){
        return mapper.map(dto, Sale.class);
    }
}
