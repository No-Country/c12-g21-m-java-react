package nocountry.ecommerce.services;

import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.models.Role;
import nocountry.ecommerce.models.User;

public interface IUserService extends ICRUD<User, Integer>{

    User findByEmail(String email);
    boolean existsByEmail(String email);

    User saveAvatar(User user, String path);

}
