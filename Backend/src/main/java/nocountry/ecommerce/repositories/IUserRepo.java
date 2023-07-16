package nocountry.ecommerce.repositories;

import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IUserRepo extends IGenericRepo<User, Integer>{

    User findOneByEmail(String email);


    boolean existsUsersByEmail(String email);
}
