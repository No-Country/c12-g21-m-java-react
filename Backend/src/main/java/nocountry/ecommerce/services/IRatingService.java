package nocountry.ecommerce.services;

import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Province;
import nocountry.ecommerce.models.Rating;

import java.util.List;

public interface IRatingService extends ICRUD<Rating, Integer>{


    List<Rating> findByIdUser(Integer id);

   Double findAverage(Integer id);
}
