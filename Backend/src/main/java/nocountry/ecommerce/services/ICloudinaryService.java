package nocountry.ecommerce.services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import nocountry.ecommerce.models.City;
import nocountry.ecommerce.models.Country;
import nocountry.ecommerce.models.ProductImage;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface ICloudinaryService extends ICRUD<ProductImage, Integer>{

   // Cloudinary cloudinary;

   /* private Map<String, String> valuesMap = new HashMap<>();

    public ICloudinaryService() {
        valuesMap.put("cloud_name", "dohtb4vzp");
        valuesMap.put("api_key", "182714762478922");
        valuesMap.put("api_secret", "UuaRPotGANnxuPQOUFZ_B3hHwDg");
        cloudinary = new Cloudinary(valuesMap);
    }
*/
    Map upload(MultipartFile multipartFile)throws IOException ;
    /*public Map upload(MultipartFile multipartFile) throws IOException {
        File file = convert(multipartFile);
        Map result = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
        file.delete();
        return result;
    }
*/
    Map delete(String id)throws IOException ;
   /* public Map delete(String id) throws IOException {
        Map result = cloudinary.uploader().destroy(id, ObjectUtils.emptyMap());
        return result;
    }
*/
   File convert(MultipartFile multipartFile) throws IOException ;
   /* private File convert(MultipartFile multipartFile) throws IOException {
        File file = new File(multipartFile.getOriginalFilename());
        FileOutputStream fo = new FileOutputStream(file);
        fo.write(multipartFile.getBytes());
        fo.close();
        return file;
    }*/
}
