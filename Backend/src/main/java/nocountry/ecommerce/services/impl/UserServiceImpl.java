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

    @Override
    public User saveAvatar(User user, String path) {
        //?System.out.println(user.getUserPerson().getIdUserPerson());
        //System.out.println(path);
        //System.out.println( "UPDATE user_person  SET avatar_path="+path +"WHERE id_user_person = :user.getUserPerson().getIdUserPerson()" );
        repo.saveAvatar(user.getUserPerson().getIdUserPerson(), path);
        return user;
    }

}
