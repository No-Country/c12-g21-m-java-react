package nocountry.ecommerce.config;

import nocountry.ecommerce.dto.*;
import nocountry.ecommerce.models.*;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class MapperConfig {

    private Integer idUser;

    @Bean("defaultMapper")
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
    @Bean("userMapper")
    public ModelMapper userMapper(){
        return new ModelMapper();
    }

    @Bean("productResponseMapper")
    public ModelMapper productResponseMapper(){
        ModelMapper mapper = new ModelMapper();

        TypeMap<Product, ProductResponseDTO> typeMap1 = mapper.createTypeMap(Product.class, ProductResponseDTO.class);
        typeMap1.addMapping(e-> e.getUser().getIdUser(), (dest, v) -> dest.setIdUserSeller((Integer) v));
        typeMap1.addMapping(e-> e.getCity().getIdCity(), (dest, v) -> dest.setIdCity((Integer) v));
        typeMap1.addMapping(e-> e.getCategoryProduct().getIdCategoryProduct(), (dest, v) -> dest.setIdCategoryProduct((Integer) v));
        typeMap1.addMapping(e-> e.getCategoryHouseRooms().getIdCategoryHouseRooms(), (dest, v) -> dest.setIdCategoryHouseRooms((Integer) v));
        typeMap1.addMapping(e-> e.getCategoryStatus().getIdCategoryStatus(), (dest, v) -> dest.setIdCategoryStatus((Integer) v));
        return mapper;
    }

    @Bean("saleMapper")
    public ModelMapper saleMapper(){
        ModelMapper mapper = new ModelMapper();

        TypeMap<Sale, SaleDTO> typeMap1 = mapper.createTypeMap(Sale.class, SaleDTO.class);
        typeMap1.addMapping(e-> e.getUser(), (dest, v) -> dest.setIdUserBuyer((UserDTO) v));

        TypeMap<SaleDTO, Sale> typeMap2= mapper.createTypeMap(SaleDTO.class, Sale.class);
        typeMap2.addMapping(SaleDTO::getIdUserBuyer, (dest, v) -> dest.setUser((User) v));

        return mapper;
    }

   /* @Bean("messageMapper")
    public ModelMapper messageMapper(){
        ModelMapper mapper = new ModelMapper();

        TypeMap<Message, MessageDTO> typeMap1 = mapper.createTypeMap(Message.class, MessageDTO.class);
        typeMap1.addMapping(e-> e.getUser().getIdUser(), (dest, v) -> dest.setIdUser((Integer) v));

        TypeMap<MessageDTO, Message> typeMap2= mapper.createTypeMap(MessageDTO.class, Message.class);
        typeMap2.addMapping(MessageDTO::getIdUser, (dest, v) -> dest.setUser((User) v));

        return mapper;
    }*/

}
