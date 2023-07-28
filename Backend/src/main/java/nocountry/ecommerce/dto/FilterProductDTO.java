package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FilterProductDTO {
    private Integer idCategoryHouseRooms;
    private Integer idCategoryProduct;
    private Integer idCategoryStatus;
    private Double priceFrom;
    private Double priceTo;
    private Integer idCity;

}
