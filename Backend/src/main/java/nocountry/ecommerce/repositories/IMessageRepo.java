package nocountry.ecommerce.repositories;

import jakarta.transaction.Transactional;
import nocountry.ecommerce.models.Message;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.ProductImage;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IMessageRepo extends IGenericRepo<Message, Integer>{

    @Query("FROM Message m " +
            "WHERE m.sale.idSale = ?1 " +
            "ORDER BY m.messageDateTime asc"
    )
    List<Message> findBySale(Integer id);
    @Transactional
    @Modifying
    @Query("DELETE FROM Message m " +
            "WHERE m.sale.idSale = ?1 "
    )
    void deleteSale(Integer id);
}
