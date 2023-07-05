package nocountry.ecommerce.models;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Product_Image {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProductImage;

    @Column(length = 300, nullable = false)
    private String imagePath;

    @Column(nullable = false)
    private boolean first;

    @ManyToOne
    @JoinColumn(name = "id_product", nullable = false, foreignKey = @ForeignKey(name= "FK_Product_image_Product"))
    private Product product;




}
