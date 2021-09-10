/**
 * 
 */
package com.infogravity.are.repository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.infogravity.are.data.Role;

import reactor.core.publisher.Flux;
/**
 * @author phani
 *
 */
public interface RoleRepository extends ReactiveCrudRepository<Role, String>{
	
    //Supports native JSON query string
    @Query("{rolename:'?0'}")
    Flux<Role> findByRoleName(String rolename);

    @Query("{entitlementName:'?0'}")
    Flux<Role> findByEntitlement(String entitlementName);
}
