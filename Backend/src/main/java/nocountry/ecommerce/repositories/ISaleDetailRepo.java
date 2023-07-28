package nocountry.ecommerce.repositories;

import jakarta.transaction.Transactional;
import nocountry.ecommerce.models.Sale;
import nocountry.ecommerce.models.SaleDetail;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ISaleDetailRepo extends IGenericRepo<SaleDetail, Integer>{
    @Transactional
    @Modifying
    @Query("DELETE FROM SaleDetail m " +
            "WHERE m.sale.idSale = ?1 "
    )
    void deleteSale(Integer id);

    @Transactional
    @Modifying
    @Query(value = """
            UPDATE product  SET active= false 
            where id_product in (select id_product from sale_detail where id_sale = :idSale )
            """, nativeQuery = true)
    void unpublish(Integer idSale);

    @Transactional
    @Modifying
    @Query(value = """
            UPDATE product SET active= true 
            where id_product in (select id_product from sale_detail where id_sale = :idSale )
            """, nativeQuery = true)
    void publish(Integer idSale);
}
