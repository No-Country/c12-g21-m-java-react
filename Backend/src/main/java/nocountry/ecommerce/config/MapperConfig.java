package nocountry.ecommerce.config;

import nocountry.ecommerce.dto.ProductImageDTO;
import nocountry.ecommerce.dto.ProductResponseDTO;
import nocountry.ecommerce.models.Product;
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
        return mapper;
    }
}
