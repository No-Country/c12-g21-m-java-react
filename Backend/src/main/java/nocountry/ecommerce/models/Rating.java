package nocountry.ecommerce.models;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Rating {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idRating;

    @Column(nullable = false)
    private int ratingValue;

    @Column(length = 500, nullable = false)
    private String review;

    @OneToOne(mappedBy = "rating")
    private Sale sale;

    @ManyToOne
    @JoinColumn(name = "id_rated_user", nullable = false, foreignKey = @ForeignKey(name= "FK_Rating_Rated_user"))
    private User user;
}
