package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.repositories.ICountryRepo;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IProvinceRepo;
import nocountry.ecommerce.services.IProvinceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProvinceServiceImpl extends CRUDImpl<Province, Integer> implements IProvinceService {
    private final IProvinceRepo repo;

    @Override
    protected IGenericRepo<Province, Integer> getRepo() {
        return repo;
    }

    @Override
    public List<Province> getByCountry(Country country) {
        return repo.findByCountry(country);
    }
    @Override
    public List<Province> getByIdCountry(Integer id) {
        return repo.getByIdCountry(id);
    }
}
