package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nocountry.ecommerce.models.Sale;
import nocountry.ecommerce.models.User;
import org.hibernate.validator.constraints.Range;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RatingDTO {
    private Integer idRating;
    @NotNull
    @Range(max = 5, min=1)
    private int ratingValue;

    @NotNull
    @NotEmpty
    @Size(max = 500)
    private String review;

    @NotNull
    private Integer idSale;

    @NotNull
    private Integer idUser;


}
