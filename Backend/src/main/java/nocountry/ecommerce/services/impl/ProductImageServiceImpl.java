package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.ProductImage;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IProductImageRepo;
import nocountry.ecommerce.repositories.IProductRepo;
import nocountry.ecommerce.services.IProductImageService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductImageServiceImpl extends CRUDImpl<ProductImage, Integer> implements IProductImageService {
    private final IProductImageRepo repo;

    @Override
    protected IGenericRepo<ProductImage, Integer> getRepo() {
        return repo;
    }
}
