package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.ProductDTO;
import nocountry.ecommerce.dto.MessageDTO;
import nocountry.ecommerce.models.Message;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.services.ICloudinaryService;
import nocountry.ecommerce.services.IMessageService;
import nocountry.ecommerce.services.IProductImageService;
import nocountry.ecommerce.services.IProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/messages")
@RequiredArgsConstructor
public class MessageController {
    private final IMessageService service;

    @Qualifier("defaultMapper")
    private final ModelMapper mapper;
    @Operation(summary="Registra un mensaje")
    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody MessageDTO dto){
        Message obj = service.save(this.convertToEntity(dto));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdMessage()).toUri();
        return ResponseEntity.created(location).build();
    }
    @Operation(summary="Lista todos los mensajes de una venta")
    @GetMapping("/sale/{id}")
    public ResponseEntity<List<MessageDTO>> findBySale(@PathVariable("id") Integer id){
        List<MessageDTO> list = service.findBySale(id).stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    private MessageDTO convertToDto(Message obj) {
        return mapper.map(obj, MessageDTO.class);
    }
    private Message convertToEntity(MessageDTO obj) {
        return mapper.map(obj, Message.class);
    }
}
