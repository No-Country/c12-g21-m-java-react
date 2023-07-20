package nocountry.ecommerce.repositories;

import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.ProductImage;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductImageRepo extends IGenericRepo<ProductImage, Integer>{

    @Modifying
    @Query(value = "INSERT INTO product_image(id_product, image_path, first) VALUES(:idProduct, :imagePath, :first)" , nativeQuery = true)
    Integer savePhoto(@Param("idProduct") Integer idProduct, @Param("imagePath") String imagePath, @Param("first") boolean firt);

}
