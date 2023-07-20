package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
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
public class ProductResponseImageDTO {
    private Integer idProductImage;

    @JsonBackReference
    private ProductDTO product;

    @NotNull
    @NotEmpty
    @Size(max = 300)
    private String imagePath;

    @NotNull
    private boolean first;
}
