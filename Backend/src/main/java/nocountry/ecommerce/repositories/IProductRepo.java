package nocountry.ecommerce.repositories;

import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.models.Sale;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface IProductRepo extends IGenericRepo<Product, Integer>{
    @Query("FROM Product p WHERE" +
            "(?1 is null or p.categoryHouseRooms.idCategoryHouseRooms = ?1) " +
            "AND (?2 is null or p.categoryProduct.idCategoryProduct = ?2) " +
            "AND (?3 is null or p.categoryStatus.idCategoryStatus = ?3) " +
            "AND (?4 is null or p.price >= ?4 )" +
            "AND (?5 is null or p.price <= ?5 )" +
            "AND (?6 is null or p.city.idCity = ?6)" +
            "AND p.active = true"
    )
    List<Product> findByFilters(Integer idCategoryHouseRooms, Integer idCategoryProduct, Integer idCategoryStatus, Double priceFrom, Double priceTo, Integer idCity);

    Product findByIdProductAndActive(Integer id, boolean active);

    List<Product> findByHighlightAndActive(boolean highlight, boolean active);

    @Query(value = """
            select p.* from product p
            where p.id_product not in (select id_product from sale_detail)
            and p.id_user_seller = :idUser
            """, nativeQuery = true)
    List<Product> findPublish(Integer idUser);
}
