package nocountry.ecommerce.repositories;

import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.Role;
import nocountry.ecommerce.models.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IRoleRepo extends IGenericRepo<Role, Integer>{

    @Query("FROM Role p WHERE p.idRole = ?1")
    Role getByIdRole(Integer id);


    @Query("FROM Role p WHERE p.idRole = 1 or p.idRole = 2")
    List<Role> getInitialRole();
}
