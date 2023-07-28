package nocountry.ecommerce.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserPersonDTO {

    private Integer idUserPerson;

    @NotNull
    @NotEmpty
    @Size(max = 100)
    private String firstName;

    @NotNull
    @NotEmpty
    @Column(length = 100, nullable = false)
    private String lastName;

    @NotNull
    @NotEmpty
    @Column(length = 200, nullable = false)
    private String address;

    @NotNull
    @NotEmpty
    @Column(length = 50, nullable = false)
    private String phone;

    @NotNull
    @NotEmpty
    @Column(nullable = false)
    private boolean newsletter;

    @NotNull
    @NotEmpty
    private Integer idCity;

    @NotNull
    @NotEmpty
    @Column(length = 50, nullable = false)
    private String postalCode;

    @Size(max = 300)
    private String avatarPath;
}

