package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.repositories.ICountryRepo;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.services.ICountryService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CountryServiceImpl extends CRUDImpl<Country, Integer> implements ICountryService {

    private final ICountryRepo repo;

    @Override
    protected IGenericRepo<Country, Integer> getRepo() {
        return repo;
    }
}
