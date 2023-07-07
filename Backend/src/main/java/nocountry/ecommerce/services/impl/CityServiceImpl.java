package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.repositories.ICityRepo;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IProvinceRepo;
import nocountry.ecommerce.services.ICityService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class CityServiceImpl extends CRUDImpl<City, Integer> implements ICityService {
    private final ICityRepo repo;

    protected IGenericRepo<City, Integer> getRepo() {
        return repo;
    }
    @Override
    public List<City> getByIdProvince(Integer id) {
        return repo.getByIdProvince(id);
    }


}
