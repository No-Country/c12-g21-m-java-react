package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.CategoryHouseRooms;
import nocountry.ecommerce.models.CategoryProduct;
import nocountry.ecommerce.repositories.ICategoryHouseRoomsRepo;
import nocountry.ecommerce.repositories.ICategoryProductRepo;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.services.ICategoryHouseRoomsService;
import nocountry.ecommerce.services.ICategoryProductService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryProductServiceImpl extends CRUDImpl<CategoryProduct, Integer> implements ICategoryProductService {

    private final ICategoryProductRepo repo;

    @Override
    protected IGenericRepo<CategoryProduct, Integer> getRepo() {
        return repo;
    }
}
