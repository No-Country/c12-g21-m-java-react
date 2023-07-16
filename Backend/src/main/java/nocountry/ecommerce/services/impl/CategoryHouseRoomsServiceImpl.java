package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.CategoryHouseRooms;
import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.repositories.ICategoryHouseRoomsRepo;
import nocountry.ecommerce.repositories.ICountryRepo;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.services.ICategoryHouseRoomsService;
import nocountry.ecommerce.services.ICountryService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryHouseRoomsServiceImpl extends CRUDImpl<CategoryHouseRooms, Integer> implements ICategoryHouseRoomsService {

    private final ICategoryHouseRoomsRepo repo;

    @Override
    protected IGenericRepo<CategoryHouseRooms, Integer> getRepo() {
        return repo;
    }
}
