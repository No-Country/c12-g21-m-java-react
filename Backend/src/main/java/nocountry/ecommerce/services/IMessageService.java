package nocountry.ecommerce.services;

import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.models.Message;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.Province;

import java.util.List;

public interface IMessageService extends ICRUD<Message, Integer> {
    List<Message> findBySale(Integer id);
}
