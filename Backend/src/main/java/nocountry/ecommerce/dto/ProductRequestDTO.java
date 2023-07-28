package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Column;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nocountry.ecommerce.models.CategoryHouseRooms;
import nocountry.ecommerce.models.CategoryProduct;
import nocountry.ecommerce.models.CategoryStatus;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductRequestDTO {
    private Integer idProduct;

    @NotNull
    @NotEmpty
    @Size(max=200)
    @Column( nullable = false)
    private String title;

    @NotNull
    @NotEmpty
    @Column( nullable = false,columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "decimal(18,2)" , nullable = false)
    private Double price;
    @NotNull
    @NotEmpty
    @Size(max=50)
    @Column(nullable = false)
    private String colour;
    @NotNull
     @Column(nullable = false)
    private boolean active;

    @NotNull
     @Column(nullable = false)
    private boolean highlight;
    @NotNull
    private Integer idCategoryHouseRooms;

    @NotNull
    private Integer idCategoryProduct;

    @NotNull
    private Integer idCategoryStatus;

    @NotNull
    private Integer idCity;

    @NotNull
    private Integer idUserSeller;


  // private MultipartFile[] photos;
}
