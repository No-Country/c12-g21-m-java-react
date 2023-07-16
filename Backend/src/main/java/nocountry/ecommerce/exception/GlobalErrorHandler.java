package nocountry.ecommerce.exception;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@ControllerAdvice
public class GlobalErrorHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<CustomErrorResponse> handleAllException(Exception ex, WebRequest req) {
        CustomErrorResponse res = new CustomErrorResponse(LocalDateTime.now(), ex.getMessage(), req.getDescription(false));
        return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
   public ResponseEntity<CustomErrorResponse> processUnmergeException(final MethodArgumentNotValidException ex) {

       String list = ex.getBindingResult().getAllErrors().stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList().toString();
        //CustomErrorResponse res = new CustomErrorResponse(LocalDateTime.now(), ex.getMessage(), req.getDescription(false));

        CustomErrorResponse res = new CustomErrorResponse(LocalDateTime.now(), list, "");
        return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        // return new ResponseEntity<>(list, HttpStatus.BAD_REQUEST);
    }
}
