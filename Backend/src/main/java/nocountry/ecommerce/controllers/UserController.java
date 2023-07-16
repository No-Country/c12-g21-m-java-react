package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.annotations.UniqueEmailValidator;
import nocountry.ecommerce.dto.UserDTO;
import nocountry.ecommerce.exception.CustomErrorResponse;
import nocountry.ecommerce.models.Role;
import nocountry.ecommerce.models.User;
import nocountry.ecommerce.models.UserPerson;
import nocountry.ecommerce.services.IUserService;
import nocountry.ecommerce.services.IRoleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Validated
public class UserController {

    private final IUserService service;
    private final IRoleService serviceRole;
    @Qualifier("userMapper")
    private final ModelMapper mapper;

    @Operation(summary="Registro de usuarios.")
    @PostMapping("/register")
    public ResponseEntity<UserDTO> save(@Valid @RequestBody UserDTO dto)
    {
        User obj1 = this.convertToEntity(dto);
User check = service.findByEmail(obj1.getEmail());
        System.out.println(check);
        if ( Objects.nonNull(check) ) {
            String exceptionMsg = "User exists";
            CustomErrorResponse errorResponse = new CustomErrorResponse(LocalDateTime.now(), exceptionMsg, null);
        }

        //User obj1 = this.convertToEntity(dto);
        int strength = 10; // work factor of bcrypt
        BCryptPasswordEncoder bCryptPasswordEncoder =
                new BCryptPasswordEncoder(strength, new SecureRandom());
        String encodedPassword = bCryptPasswordEncoder.encode(dto.getPassword());
        obj1.setPassword(encodedPassword);
        obj1.setRoles(serviceRole.getInitialRole());
        User obj = service.save(obj1);
        return new ResponseEntity<>(convertToDto(obj), HttpStatus.CREATED);
    }
    private User convertToEntity(UserDTO dto){
        return mapper.map(dto, User.class);
    }
    private UserDTO convertToDto(User obj){
        return mapper.map(obj, UserDTO.class);
    }

}
