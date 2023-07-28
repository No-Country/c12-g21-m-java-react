package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CategoryHouseRoomsDTO {
    private Integer idCategoryHouseRooms;
    @NotNull
    @NotEmpty
    @Size(max = 50)
    private String title;
}
