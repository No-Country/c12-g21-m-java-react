package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SaleDetailReduceDTO {
    @EqualsAndHashCode.Include
    private Integer idSaleDetail;

    @JsonBackReference
    private SaleDTO sale;

    @JsonBackReference
    private Integer idProduct;
    @NotNull
    @NotEmpty
    private Integer quantity;

}
