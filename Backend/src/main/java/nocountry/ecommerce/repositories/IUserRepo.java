package nocountry.ecommerce.repositories;

import jakarta.transaction.Transactional;
import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IUserRepo extends IGenericRepo<User, Integer>{

    User findOneByEmail(String email);


    boolean existsUsersByEmail(String email);
@Transactional
    @Modifying
    @Query(value = """
            UPDATE user_person  SET avatar_path= :path
             WHERE id_user_person = :idUserPerson 
            """, nativeQuery = true)
    void saveAvatar(Integer idUserPerson, String path);
}
