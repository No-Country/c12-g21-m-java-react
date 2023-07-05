package nocountry.ecommerce.models;

import jakarta.persistence.*;
import lombok.*;
import org.w3c.dom.Text;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Product {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProduct;

    @Column(length = 200, nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "decimal(6,2)" , nullable = false)
    private double price;

    @Column(length = 50, nullable = false)
    private String colour;

    @Column(nullable = false)
    private boolean active;

    @ManyToOne
    @JoinColumn(name = "id_category_house_rooms", nullable = false, foreignKey = @ForeignKey(name= "FK_Product_Category_house_rooms"))
    private CategoryHouseRooms categoryHouseRooms;

    @ManyToOne
    @JoinColumn(name = "id_category_product", nullable = false, foreignKey = @ForeignKey(name= "FK_Product_Category_product"))
    private CategoryProduct categoryProduct;

    @ManyToOne
    @JoinColumn(name = "id_category_status", nullable = false, foreignKey = @ForeignKey(name= "FK_Product_Category_status"))
    private CategoryStatus categoryStatus;

    @ManyToOne
    @JoinColumn(name = "id_city", nullable = false, foreignKey = @ForeignKey(name= "FK_Product_City"))
    private City city;

    @ManyToOne
    @JoinColumn(name = "id_user_seller", nullable = false, foreignKey = @ForeignKey(name= "FK_Product_User"))
    private User user;


}
