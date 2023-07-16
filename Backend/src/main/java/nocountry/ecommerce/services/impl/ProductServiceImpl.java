package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.ProductResponseDTO;
import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IProductRepo;
import nocountry.ecommerce.repositories.IProvinceRepo;
import nocountry.ecommerce.services.IProductService;
import nocountry.ecommerce.services.IProvinceService;
import org.apache.el.stream.Optional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl extends CRUDImpl<Product, Integer> implements IProductService {
    private final IProductRepo repo;

    @Override
    protected IGenericRepo<Product, Integer> getRepo() {
        return repo;
    }

    @Override
    public List<Product> getByFilters(Integer idCategoryHouseRooms,
                                       Integer idCategoryProduct,
                                       Integer idCategoryStatus,
                                       Double priceFrom,
                                       Double priceTo,
                                       Integer idCity) {
        return repo.findByFilters(idCategoryHouseRooms,
                idCategoryProduct,
                idCategoryStatus,
                priceFrom,
                priceTo,
                idCity
                );
    }
    @Override
    public Product findByIdProductAndActive(Integer id, boolean active) {
        return repo.findByIdProductAndActive(id, active);
    }
}
