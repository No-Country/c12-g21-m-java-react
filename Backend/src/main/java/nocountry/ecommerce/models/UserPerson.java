package nocountry.ecommerce.models;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity

public class UserPerson {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUserPerson;

    @Column(length = 100, nullable = false)
    private String firstName;

    @Column(length = 100, nullable = false)
    private String lastName;

    @Column(length = 200, nullable = false)
    private String address;

    @Column(length = 50, nullable = false)
    private String phone;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "id_user", referencedColumnName = "idUser")
    //private User user;
    //@OneToOne(mappedBy = "userPerson", cascade=CascadeType.ALL)

    /*@OneToOne(mappedBy = "userPerson")
    private User user;
*/
    @Column(nullable = false)
    private boolean newsletter;

    @ManyToOne
    @JoinColumn(name = "id_city", nullable = false, foreignKey = @ForeignKey(name= "FK_User_person_City"))
    private City city;

    @Column(length = 50, nullable = false)
    private String postalCode;

    @Column(length = 300)
    private String avatarPath;

}
