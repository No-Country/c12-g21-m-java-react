package nocountry.ecommerce.services;

import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.Province;

import java.util.List;

public interface ICityService extends ICRUD<City, Integer>{
    List<City> getByIdProvince(Integer id);
}
