package nocountry.ecommerce.annotations;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import nocountry.ecommerce.annotations.UniqueEmail;
import nocountry.ecommerce.services.IUserService;
import org.springframework.stereotype.Component;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {

    private final IUserService service;

    public UniqueEmailValidator(IUserService service) {
        this.service = service;
    }

    @Override
    public boolean isValid(String email, ConstraintValidatorContext context){
        return !service.existsByEmail(email);
    }
}