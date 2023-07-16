package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.models.Role;
import nocountry.ecommerce.models.User;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IProvinceRepo;
import nocountry.ecommerce.repositories.IUserRepo;
import nocountry.ecommerce.services.IProvinceService;
import nocountry.ecommerce.services.IUserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl  extends CRUDImpl<User, Integer> implements IUserService {

    private final IUserRepo repo;

    @Override
    protected IGenericRepo<User, Integer> getRepo() {
        return repo;
    }
    @Override
    public User findByEmail(String email) {
        return repo.findOneByEmail(email);
    }

    @Override
    public boolean existsByEmail(String email) {
        return repo.existsUsersByEmail(email);
    }

}
