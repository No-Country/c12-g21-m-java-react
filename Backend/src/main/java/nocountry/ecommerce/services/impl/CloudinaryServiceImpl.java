package nocountry.ecommerce.services.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.models.ProductImage;
import nocountry.ecommerce.repositories.ICountryRepo;
import nocountry.ecommerce.repositories.IGenericRepo;
import nocountry.ecommerce.repositories.IProductImageRepo;
import nocountry.ecommerce.services.ICloudinaryService;
import nocountry.ecommerce.services.ICountryService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service

public class CloudinaryServiceImpl extends CRUDImpl<ProductImage, Integer> implements ICloudinaryService  {
    private final IProductImageRepo repo;
    private final Map<String, String> valuesMap;
    private Cloudinary cloudinary;

    @Override
    protected IGenericRepo<ProductImage, Integer> getRepo() {
        return repo;
    }

    public CloudinaryServiceImpl(IProductImageRepo repo) {
        this.repo = repo;
        this.valuesMap =  new HashMap<>();
      //  valuesMap = new HashMap<>();
        this.valuesMap.put("cloud_name", "dohtb4vzp");
        this.valuesMap.put("api_key", "182714762478922");
        this.valuesMap.put("api_secret", "UuaRPotGANnxuPQOUFZ_B3hHwDg");
        this.cloudinary = new Cloudinary(valuesMap);
    }

    public Map upload(MultipartFile multipartFile) throws IOException {
        File file = convert(multipartFile);
        Map result = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
        file.delete();
        return result;
    }

    public Map delete(String id) throws IOException {
        Map result = cloudinary.uploader().destroy(id, ObjectUtils.emptyMap());
        return result;
    }

    public File convert(MultipartFile multipartFile) throws IOException {
        File file = new File(multipartFile.getOriginalFilename());
        FileOutputStream fo = new FileOutputStream(file);
        fo.write(multipartFile.getBytes());
        fo.close();
        return file;
    }
}
