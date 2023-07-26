package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.*;
import nocountry.ecommerce.repositories.*;
import nocountry.ecommerce.services.IRoleService;
import nocountry.ecommerce.services.ISaleService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SaleServiceImpl extends CRUDImpl<Sale, Integer> implements ISaleService {
    private final ISaleRepo repo;
    private final ISaleDetailRepo ceRepo;
    private final IMessageRepo repom;
    @Override
    protected IGenericRepo<Sale, Integer> getRepo() {
        return repo;
    }
    @Transactional //(propagation = Propagation.REQUIRES_NEW)
   @Override
   public Sale saveTransactional(Sale sale, List<SaleDetail> details) {
        Sale sales = repo.save(sale);
        ceRepo.unpublish(sale.getIdSale());
        //System.out.println(product.getIdProduct());
        // photos.forEach(ex -> ceRepo.savePhoto(prod1.getIdProduct(), ex.getImagePath(), false));

        return sales;
    }
    @Override
    public List<Sale> findSellByStatus(String status, Integer idUser) {
        return repo.findSellByStatus(status, idUser);
    }

    @Override
    public List<Sale> findBuyByStatus(String status, Integer idUser) {
        return repo.findBuyByStatus(status, idUser);
    }
    @Transactional //(propagation = Propagation.REQUIRES_NEW)
    @Override
    public void cancelTransactional(Sale sale) {
        ceRepo.publish(sale.getIdSale());
        ceRepo.deleteSale(sale.getIdSale());
        repom.deleteSale(sale.getIdSale());
        repo.delete(sale);

    }

    @Override
    public void updateRating(Integer idRating, Integer idSale) {
        repo.updateRating(idRating, idSale);
    }
}
