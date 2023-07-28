package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nocountry.ecommerce.models.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductDTO {

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

    private boolean highlight;

    @NotNull
    private CategoryHouseRooms categoryHouseRooms;

    @NotNull
    private CategoryProduct categoryProduct;

    @NotNull
    private CategoryStatus categoryStatus;

    @NotNull
    private City city;

    @NotNull
    private User user;
    @JsonManagedReference
    @NotNull
    List<ProductImageDTO> photos;
}
