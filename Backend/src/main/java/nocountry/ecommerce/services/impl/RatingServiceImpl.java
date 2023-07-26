package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.models.Rating;
import nocountry.ecommerce.models.Sale;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IProvinceRepo;
import nocountry.ecommerce.repositories.IRatingRepo;
import nocountry.ecommerce.repositories.ISaleRepo;
import nocountry.ecommerce.services.IRatingService;
import nocountry.ecommerce.services.ISaleService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RatingServiceImpl extends CRUDImpl<Rating, Integer> implements IRatingService {
    private final IRatingRepo repo;
    private final ISaleRepo repoSale;

    @Override
    protected IGenericRepo<Rating, Integer> getRepo() {
        return repo;
    }
    @Transactional
    @Override
    public Rating save(Rating rating, Integer sale) {

        Rating rat = repo.save(rating);
        repoSale.updateRating(rat.getIdRating(), sale);
          return rat;
    }
    @Override
    public List<Rating> findByIdUser(Integer id) {
        return repo.findByIdUser(id);
    }
    @Override
    public Double findAverage(Integer id) {
        return repo.findAverage(id);
    }
}
