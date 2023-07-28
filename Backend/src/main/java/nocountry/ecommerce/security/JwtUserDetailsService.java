package nocountry.ecommerce.security;

import lombok.RequiredArgsConstructor;
import nocountry.ecommerce.models.User;
import org.springframework.stereotype.Service;
import nocountry.ecommerce.repositories.IUserRepo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


@Service
@RequiredArgsConstructor
public class JwtUserDetailsService implements UserDetailsService {

    private final IUserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = repo.findOneByEmail(email);

        if(user == null){
            throw new UsernameNotFoundException(String.format("User not exists", email));
        }

        List<GrantedAuthority> roles = new ArrayList<>();
        user.getRoles().forEach(rol -> {
            roles.add(new SimpleGrantedAuthority(rol.getName()));
        });

        UserDetails ud = new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), roles);
        return ud;
    }
}
