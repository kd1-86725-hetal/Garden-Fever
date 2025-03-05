package com.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.app.security.JwtAuthenticationEntryPoint;
import com.app.security.JwtAuthenticationFilter;
import com.app.service.CustomeUserDetailService;

@Configuration
public class SecurityConfig {
	@Autowired
	private UserDetailsService userDetailService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
    private JwtAuthenticationEntryPoint point;
    @Autowired	
    private JwtAuthenticationFilter filter;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(csrf -> csrf.disable())
        					.cors(cors->cors.disable())
        					.authorizeHttpRequests(
        							auth->auth.antMatchers("/greengoce/**").authenticated()
        							.antMatchers("/greengrocer/**").permitAll()
        							.antMatchers("/user/login").permitAll()
        							.antMatchers("/user/createUser").permitAll()
        							.antMatchers("/products/**").permitAll()
        							.antMatchers("/seller/**").permitAll()
        							.antMatchers("/orders/**").permitAll()
        							.antMatchers("/deliveryboy/**").permitAll()
        							.antMatchers("/cart/**").permitAll()
        							.antMatchers("/admin/**").permitAll()
        							.antMatchers("/v*/api-doc*/**","/swagger-ui/**","/swagger-ui.html").permitAll()
        							.anyRequest().authenticated())
        							.exceptionHandling(ex->ex.authenticationEntryPoint(point))
        							.sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
    
    @Bean
    public DaoAuthenticationProvider doDaoAuthenticationProvider() {
    	DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
    	provider.setUserDetailsService(userDetailService);
    	provider.setPasswordEncoder(passwordEncoder);
    	return provider;
    }
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
        return builder.getAuthenticationManager();
    }
}
