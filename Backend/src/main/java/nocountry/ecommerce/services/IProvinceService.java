package nocountry.ecommerce.services;

import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.models.Province;

import java.util.List;

public interface IProvinceService extends ICRUD<Province, Integer> {

    List<Province> getByCountry(Country country);
    List<Province> getByIdCountry(Integer id);
}
