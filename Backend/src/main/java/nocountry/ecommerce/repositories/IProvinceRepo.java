package nocountry.ecommerce.repositories;

import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.models.Province;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProvinceRepo extends IGenericRepo<Province, Integer>{
    List<Province> findByCountry(Country country);

    @Query("FROM Province p WHERE p.country.idCountry = ?1")
    List<Province> getByIdCountry(Integer id);
}
