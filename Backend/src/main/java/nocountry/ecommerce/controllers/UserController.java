package nocountry.ecommerce.controllers;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.annotations.UniqueEmailValidator;
import nocountry.ecommerce.dto.UserDTO;
import nocountry.ecommerce.exception.CustomErrorResponse;
import nocountry.ecommerce.exception.ModelNotFoundException;
import nocountry.ecommerce.models.Role;
import nocountry.ecommerce.models.User;
import nocountry.ecommerce.models.UserPerson;
import nocountry.ecommerce.services.ICloudinaryService;
import nocountry.ecommerce.services.IUserService;
import nocountry.ecommerce.services.IRoleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Validated
public class UserController {

    private final IUserService service;
    private final IRoleService serviceRole;
    private final ICloudinaryService cloudinaryService;

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

    @Operation(summary="Obtiene los datos de un usuario." +
            " {'email': 'susana@mail.com'}")
    @PostMapping("/profile")
    public ResponseEntity<UserDTO> getUser(@RequestBody UserDTO dto) throws Exception {
        User check = service.findByEmail(dto.getEmail());
        if (Objects.isNull(check)) {
            String exceptionMsg = "User not found";
            throw new ModelNotFoundException(exceptionMsg);
        }
        UserDTO obj = this.convertToDto(service.findByEmail(dto.getEmail()));
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @PostMapping("/uploadavatar")
    public ResponseEntity<UserDTO> uploadAvatar(@RequestParam MultipartFile multipartFile, @RequestParam Integer idUser)throws IOException {
        BufferedImage bi = ImageIO.read(multipartFile.getInputStream());
        if(bi == null){
            CustomErrorResponse errorResponse = new CustomErrorResponse(LocalDateTime.now(), "imagen no valida", null);
        }
        Map result = cloudinaryService.upload(multipartFile);
        //  System.out.println(result.get("original_filename"));
        // System.out.println(result.get("url"));
        // System.out.println(result.get("public_id"));
        User user = service.findById(idUser);
        //user.saveAvatar(result.get("url").toString());
        User us = service.saveAvatar(user,result.get("url").toString());

        return new ResponseEntity(convertToDto(us), HttpStatus.OK);
    }
    private User convertToEntity(UserDTO dto){
        return mapper.map(dto, User.class);
    }
    private UserDTO convertToDto(User obj){
        return mapper.map(obj, UserDTO.class);
    }

}
