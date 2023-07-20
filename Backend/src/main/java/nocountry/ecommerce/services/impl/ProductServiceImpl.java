package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.dto.ProductResponseDTO;
import nocountry.ecommerce.models.*;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IProductImageRepo;
import nocountry.ecommerce.repositories.IProductRepo;
import nocountry.ecommerce.repositories.IProvinceRepo;
import nocountry.ecommerce.services.IProductService;
import nocountry.ecommerce.services.IProvinceService;
import org.apache.el.stream.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl extends CRUDImpl<Product, Integer> implements IProductService {
    private final IProductRepo repo;
    private final IProductImageRepo ceRepo;

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
    @Override
    public List<Product> findByHighlightAndActive(boolean highlight, boolean active){
        return repo.findByHighlightAndActive(highlight, active);
    }

    @Transactional //(propagation = Propagation.REQUIRES_NEW)
    @Override
    public Product saveTransactional(Product product, List<ProductImage> photos) {
        Product prod1 = repo.save(product);
        //System.out.println(product.getIdProduct());
       // photos.forEach(ex -> ceRepo.savePhoto(prod1.getIdProduct(), ex.getImagePath(), false));

        return product;
    }
}
