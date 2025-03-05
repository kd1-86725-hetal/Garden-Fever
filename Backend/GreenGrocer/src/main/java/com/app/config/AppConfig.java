package com.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AppConfig {
//	@Bean
//	public UserDetailsService userDetailService() {
//		UserDetails user = User.builder().username("admin").password(passwordEncoder().encode("admin")).roles("ADMIN").build();
//		UserDetails user1 = User.builder().username("hetal").password(passwordEncoder().encode("hetal")).roles("ADMIN").build();
//		return new InMemoryUserDetailsManager(user,user1); 
//	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
}
