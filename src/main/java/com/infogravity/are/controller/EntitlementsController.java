/**
 * 
 */
package com.infogravity.are.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.infogravity.are.data.Entitlement;
import com.infogravity.are.repository.EntitlementsRepository;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;

import reactor.core.publisher.Flux;
/**
 * @author phani
 *
 */
@RestController 
public class EntitlementsController {
	
    @Autowired
    MongoTemplate mongoTemplate;
    
	private final EntitlementsRepository entitlementsRepository;
	
	public EntitlementsController(EntitlementsRepository entitlementsRepository)
	{
		this.entitlementsRepository = entitlementsRepository;
	}
	
		
	@GetMapping("/entitlementsInventory")
	public Flux<Entitlement> getByEntitlementName(@RequestParam(required=false, defaultValue="") String entitlementName)
	{
		if(entitlementName.equals(""))
		{
			return entitlementsRepository.findAll();
		}
		else
		{
			return entitlementsRepository.findByEntitlementName(entitlementName);
		}
	}
	
	@GetMapping("/insertEntitlement")
	public String insertEntitlement(@RequestParam String entitlementName, @RequestParam String entitlementDescription)
	{
		Entitlement ent = new Entitlement();
		ent.setEntitlementName(entitlementName);
		ent.setEntitlementDescription(entitlementDescription);
		//userRepository.save(user);
		mongoTemplate.insert(ent);
		return "Entitlement document "+entitlementName+" has been inserted successfully";
	}
	
	@GetMapping("/updateEntitlement")
	public String updateEntitlement(@RequestParam(value="", required=true) String entitlementID, @RequestParam String entitlementName, @RequestParam String entitlementDescription)
	{
		Query query = new Query(Criteria.where("_id").is(entitlementID));
		Update update = new Update().set("entitlementName",entitlementName).set("entitlementDescription", entitlementDescription);
		UpdateResult result = mongoTemplate.upsert(query, update, Entitlement.class);
		return "Total "+result.getModifiedCount()+" Entitlement documents have been updated successfully";
	}
	
	@GetMapping("/deleteEntitlement")
	public String deleteEntitlement(@RequestParam(value="", required=true) String entitlementID)
	{
		Query query = new Query(Criteria.where("_id").is(entitlementID));
		Entitlement ent = mongoTemplate.findOne(query,Entitlement.class);
		if(ent!=null)
		{
			DeleteResult result = mongoTemplate.remove(query, Entitlement.class);
			return "Total "+result.getDeletedCount()+" Entitlement documents have been deleted successfully";
		}
		else
		{
			return "No matching entitlements found. Nothing to delete";
		}
	}
}
