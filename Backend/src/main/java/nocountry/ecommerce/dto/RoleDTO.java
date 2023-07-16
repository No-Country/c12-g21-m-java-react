package nocountry.ecommerce.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class RoleDTO {
    private Integer idRole;

    @NotNull
    @NotEmpty
    @Size(max = 50)
    private String name;
}
