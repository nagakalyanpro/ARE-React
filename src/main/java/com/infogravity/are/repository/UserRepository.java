/**
 * 
 */
package com.infogravity.are.repository;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import com.infogravity.are.data.User;

import reactor.core.publisher.Flux;

/**
 * @author phani
 *
 */
public interface UserRepository extends ReactiveCrudRepository<User, String>{
    //Supports native JSON query string
    @Query("{managerid:'?0'}")
    Flux<User> findByManagerid(String managerid);
    
    @Query("{department:'?0'}")
    Flux<User> findByDepartment(String department);
    
    @Query("{jobrole:'?0'}")
    Flux<User> findByJobrole(String jobrole);

}
