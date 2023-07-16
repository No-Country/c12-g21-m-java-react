package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.CategoryStatus;
import nocountry.ecommerce.repositories.ICategoryStatusRepo;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.services.ICategoryStatusService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryStatusServiceImpl extends CRUDImpl<CategoryStatus, Integer> implements ICategoryStatusService {

private final ICategoryStatusRepo repo;

@Override
protected IGenericRepo<CategoryStatus, Integer> getRepo() {
        return repo;
        }
}

