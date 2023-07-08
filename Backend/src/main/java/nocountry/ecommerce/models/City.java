package nocountry.ecommerce.models;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class City {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCity;

    @Column(length = 50, nullable = false)
    private String title;

    @ManyToOne
    @JoinColumn(name = "id_province", nullable = false, foreignKey = @ForeignKey(name= "FK_City_Province"))
    private Province province;
}
