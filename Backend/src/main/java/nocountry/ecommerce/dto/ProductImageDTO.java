package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductImageDTO {
    @EqualsAndHashCode.Include
    private Integer idProductImage;
    @JsonBackReference
    private ProductDTO product;
    @NotNull
    @NotEmpty
    @Size(max = 300)
    private String imagePath;

    @NotNull
    @NotEmpty
    private boolean first;
}
