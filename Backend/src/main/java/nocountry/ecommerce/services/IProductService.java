package nocountry.ecommerce.services;

import nocountry.ecommerce.dto.ProductResponseDTO;
import nocountry.ecommerce.models.*;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface IProductService extends ICRUD<Product, Integer> {

    List<Product> getByFilters(Integer idCategoryHouseRooms,
                               Integer idCategoryProduct,
                               Integer idCategoryStatus,
                               Double priceFrom,
                               Double priceTo,
                               Integer idCity);
    Product findByIdProductAndActive(Integer id, boolean active);

    List<Product> findByHighlightAndActive(boolean highlight, boolean active);
    Product saveTransactional(Product product, List<ProductImage> photos);

    List<Product> findPublish(Integer idUSer);
}
