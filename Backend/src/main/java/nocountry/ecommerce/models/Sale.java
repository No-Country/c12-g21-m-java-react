package nocountry.ecommerce.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Sale {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSale;

    @Column(nullable = false)
    private LocalDateTime saleDate;

    @Column(nullable = false, length = 20)
    private String status;

    @ManyToOne
    @JoinColumn(name = "id_user_buyer", nullable = false, foreignKey = @ForeignKey(name= "FK_Sale_User_Buyer"))
    private User user;

    @Column(columnDefinition = "decimal(6,2)", nullable = false)
    private double amount;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_rating", referencedColumnName = "idRating")
    private Rating rating;

    @OneToMany(mappedBy = "sale", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<SaleDetail> details;



}
