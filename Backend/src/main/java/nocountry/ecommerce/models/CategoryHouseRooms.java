package nocountry.ecommerce.models;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
/*  ex. Living, Cocina, Dormitorio, etc */
public class CategoryHouseRooms {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCategoryHouseRooms;

    @Column(length = 50, nullable = false)
    private String title;
}
