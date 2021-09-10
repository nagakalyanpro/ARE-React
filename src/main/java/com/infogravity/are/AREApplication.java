package com.infogravity.are;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.infogravity.are.repository.RoleRepository;
import com.infogravity.are.repository.UserRepository;

@SpringBootApplication
public class AREApplication {

	@Autowired
	RoleRepository roleRepository;
	UserRepository userRepository;
	
  
	public static void main(String[] args) {
		
		SpringApplication.run(AREApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/entitlementsInventory").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/insertEntitlement").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/updateEntitlement").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/deleteEntitlement").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/roleInventory").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/insertRole").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/updateRole").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/deleteRole").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/allUsers").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/reportees").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/reporteeswithmatchingrole").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/reporteeswithmatchingdept").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/insertUser").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/updateUser").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/deleteUser").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/getUserNamesByRole").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/getRoleSuggestion").allowedOrigins("http://localhost:8080/");
				registry.addMapping("/getGroupingValues").allowedOrigins("http://localhost:8080/");
				
				registry.addMapping("/entitlementsInventory").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/insertEntitlement").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/updateEntitlement").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/deleteEntitlement").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/roleInventory").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/insertRole").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/updateRole").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/deleteRole").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/allUsers").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/reportees").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/reporteeswithmatchingrole").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/reporteeswithmatchingdept").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/insertUser").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/updateUser").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/deleteUser").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/getUserNamesByRole").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/getRoleSuggestion").allowedOrigins("http://localhost:3000/");
				registry.addMapping("/getGroupingValues").allowedOrigins("http://localhost:3000/");
				//registry.addMapping("/greeting-javaconfig").allowedOrigins("http://localhost:8080/");
			}
		};
	}


}
