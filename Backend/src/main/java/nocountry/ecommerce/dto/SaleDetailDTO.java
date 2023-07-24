package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Sale;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SaleDetailDTO {
    @EqualsAndHashCode.Include
    private Integer idSaleDetail;

    @JsonBackReference
    private SaleDTO sale;


    private ProductDTO product;
    @NotNull
    @NotEmpty
    private Integer quantity;

}
