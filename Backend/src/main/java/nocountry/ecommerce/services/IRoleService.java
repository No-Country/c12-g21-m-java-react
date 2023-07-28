package nocountry.ecommerce.services;

import jakarta.persistence.criteria.CriteriaBuilder;
import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.models.Role;

import java.util.List;

public interface IRoleService extends ICRUD<Role, Integer> {
    Role getByIdRole(Integer id);
    List<Role> getInitialRole();
}
