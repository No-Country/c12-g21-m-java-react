package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductImageDTO {
    private Integer idProductImage;

    private ProductDTO product;
    @NotNull
    @NotEmpty
    @Size(max = 300)
    private String imagePath;

    @NotNull
    @NotEmpty
    private boolean first;
}
