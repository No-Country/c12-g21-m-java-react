package nocountry.ecommerce.repositories;

import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.models.Rating;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IRatingRepo extends IGenericRepo<Rating, Integer>{
    @Query("FROM Rating r WHERE" +
            "(r.user.idUser = ?1) "
    )
    List<Rating> findByIdUser(Integer id);

    @Query(value = """
            select avg(rating_value) from rating r
            where r.id_rated_user = :id
            """, nativeQuery = true)
    Double findAverage(Integer id);
}
