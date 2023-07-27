package nocountry.ecommerce.repositories;

import jakarta.transaction.Transactional;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Sale;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ISaleRepo extends IGenericRepo<Sale, Integer>{
    @Query("FROM Sale s " +
            "INNER JOIN SaleDetail d on d.sale.idSale = s.idSale " +
            "INNER JOIN Product p on p.idProduct = d.product.idProduct" +
            " WHERE ((s.status = ?1 ) or (s.status = 'CERRADO'))" +
            "AND ( p.user.idUser <= ?2 )" +
            "ORDER BY s.saleDate desc"
    )
    List<Sale> findSellByStatus(String status, Integer idUser);

    @Query("FROM Sale s " +
            "INNER JOIN SaleDetail d on d.sale.idSale = s.idSale " +
            "INNER JOIN Product p on p.idProduct = d.product.idProduct" +
            " WHERE ((s.status = ?1 ) or (s.status = 'CERRADO'))" +
            "AND ( s.user.idUser <= ?2 )" +
            "ORDER BY s.saleDate desc"
    )
    List<Sale> findBuyByStatus(String status, Integer idUser);

    @Transactional
    @Modifying
    @Query(value = """
            UPDATE sale  SET id_rating= :idRating
             where id_sale = :idSale 
            """, nativeQuery = true)
    void updateRating(Integer idRating, Integer idSale);

}
