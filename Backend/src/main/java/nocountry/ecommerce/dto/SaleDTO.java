package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import nocountry.ecommerce.models.Rating;
import nocountry.ecommerce.models.SaleDetail;
import nocountry.ecommerce.models.User;

import java.time.LocalDateTime;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SaleDTO {
    private Integer idSale;
    @NotNull
    @Column(nullable = false)
    private LocalDateTime saleDate;

    @NotNull
    @NotEmpty
    @Size(max=20)
    private String status;
    @NotNull
     private UserDTO idUserBuyer;

    @Column(columnDefinition = "decimal(18,2)" , nullable = false)
    private double amount;

    private Rating rating;

    @JsonManagedReference
    @NotNull
    @OneToMany(mappedBy = "sale", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<SaleDetailDTO> details;

}
