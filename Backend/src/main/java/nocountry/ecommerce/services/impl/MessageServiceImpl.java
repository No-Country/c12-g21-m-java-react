package nocountry.ecommerce.services.impl;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.Message;
import nocountry.ecommerce.models.Product;
import nocountry.ecommerce.models.ProductImage;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IMessageRepo;
import nocountry.ecommerce.services.IMessageService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl extends CRUDImpl<Message, Integer> implements IMessageService {
        private final IMessageRepo repo;

        @Override
        protected IGenericRepo<Message, Integer> getRepo() {
                return repo;
        }

        @Override
        public List<Message> findBySale(Integer id){
                return repo.findBySale(id);
        }
}
