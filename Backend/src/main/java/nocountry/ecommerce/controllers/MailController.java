package nocountry.ecommerce.controllers;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.utils.EmailUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mail")
@RequiredArgsConstructor
public class MailController {

    private final EmailUtil emailUtil;
    /*
    @PostMapping(value = "/sendMail")

    public ResponseEntity<Integer> sendMail(@RequestBody MailDTO email) throws Exception {
        int rpta = 0;
            Mail mail = new Mail();
            mail.setFrom("rehouseweb@gmail.com");
           // mail.setTo(us.getUsername());
            mail.setTo("rehouseweb@gmail.com");
            mail.setSubject("ReHouse - Aviso Nueva Venta");

            Map<String, Object> model = new HashMap<>();
            model.put("user", email.getNombre()+" "+ email.getApellido());
            model.put("product", email.getProductname());
            mail.setModel(model);

            emailUtil.sendMail(mail);

           // rpta = 1;
        //}
        return new ResponseEntity<>(rpta, HttpStatus.OK);
    }
    */

}
