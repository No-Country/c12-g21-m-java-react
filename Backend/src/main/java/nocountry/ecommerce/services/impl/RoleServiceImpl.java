package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.Role;
import nocountry.ecommerce.models.User;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IRoleRepo;
import nocountry.ecommerce.repositories.IUserRepo;
import nocountry.ecommerce.services.IRoleService;
import nocountry.ecommerce.services.IUserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl extends CRUDImpl<Role, Integer> implements IRoleService {

    private final IRoleRepo repo;

    @Override
    protected IGenericRepo<Role, Integer> getRepo() {
        return repo;
    }

    @Override
    public Role getByIdRole(Integer id) {
        return repo.getByIdRole(id);
    }

    @Override
    public List<Role> getInitialRole() {
        return repo.getInitialRole();
    }
}
