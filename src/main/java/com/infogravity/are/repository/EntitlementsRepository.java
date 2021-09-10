/**
 * 
 */
package com.infogravity.are.repository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.infogravity.are.data.Entitlement;

import reactor.core.publisher.Flux;
/**
 * @author phani
 *
 */
public interface EntitlementsRepository extends ReactiveCrudRepository<Entitlement, String>{
	
    //Supports native JSON query string
    @Query("{entitlementName:'?0'}")
    Flux<Entitlement> findByEntitlementName(String entitlementName);

}
