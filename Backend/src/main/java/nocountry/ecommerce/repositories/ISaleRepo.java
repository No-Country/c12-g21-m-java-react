package nocountry.ecommerce.repositories;

import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Sale;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ISaleRepo extends IGenericRepo<Sale, Integer>{
    @Query("FROM Sale s " +
            "INNER JOIN SaleDetail d on d.sale.idSale = s.idSale " +
            "INNER JOIN Product p on p.idProduct = d.product.idProduct" +
            " WHERE (s.status >= ?1 )" +
            "AND ( p.user.idUser <= ?2 )"
    )
    List<Sale> findSellByStatus(String status, Integer idUser);

    @Query("FROM Sale s " +
            "INNER JOIN SaleDetail d on d.sale.idSale = s.idSale " +
            "INNER JOIN Product p on p.idProduct = d.product.idProduct" +
            " WHERE (s.status >= ?1 )" +
            "AND ( s.user.idUser <= ?2 )"
    )
    List<Sale> findBuyByStatus(String status, Integer idUser);


}
