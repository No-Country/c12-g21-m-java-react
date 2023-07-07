package nocountry.ecommerce.repositories;

import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.models.Province;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICityRepo extends IGenericRepo<City, Integer>{
    @Query("FROM City p WHERE p.province.idProvince = ?1")
    List<City> getByIdProvince(Integer id);

}
