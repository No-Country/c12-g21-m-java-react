package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nocountry.ecommerce.models.User;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MessageDTO {
    private Integer idMessage;

    private Integer idSale;
    @NotNull
    @Column(nullable = false)
    private LocalDateTime messageDateTime;

    @NotNull
    @NotEmpty
    @Column( nullable = false,columnDefinition = "TEXT")
    private String message;

    @NotNull
    private Integer idUser;
}
