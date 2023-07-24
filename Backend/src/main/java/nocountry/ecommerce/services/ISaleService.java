package nocountry.ecommerce.services;

import nocountry.ecommerce.models.*;

import java.util.List;

public interface ISaleService extends ICRUD<Sale, Integer> {

    Sale saveTransactional(Sale sale, List<SaleDetail> details);

    List<Sale> findSellByStatus(String status, Integer idUSer);

    List<Sale> findBuyByStatus(String status, Integer idUSer);

    void cancelTransactional(Sale sale);

}
