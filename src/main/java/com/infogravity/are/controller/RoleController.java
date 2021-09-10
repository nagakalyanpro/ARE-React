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

import com.infogravity.are.data.Role;
import com.infogravity.are.repository.RoleRepository;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;

import reactor.core.publisher.Flux;
/**
 * @author phani
 *
 */
@RestController 
public class RoleController {
	
	private final RoleRepository roleRepository;
	
    @Autowired
    MongoTemplate mongoTemplate;
	
	public RoleController(RoleRepository roleRepository)
	{
		this.roleRepository = roleRepository;
	}
			
	@GetMapping("/roleInventory")
	public Flux<Role> getByRolename(@RequestParam(required=false, defaultValue="") String roleName)
	{
		if(roleName.equals(""))
		{
			return roleRepository.findAll();
		}
		else
		{
			return roleRepository.findByRoleName(roleName);
		}
	}
	
	@GetMapping("/insertRole")
	public String insertRole(@RequestParam String roleName, @RequestParam String roleDescription, @RequestParam(value="", required=false) boolean isSensitive, @RequestParam(value="", required=false) boolean isApproved, @RequestParam(value="entitlements[]", required=false) String[] entitlements)
	{
		Role role = new Role();
		role.setRolename(roleName);
		role.setRoledescription(roleDescription);
		if(entitlements==null)
			role.setEntitlements(new String []{"6125205266fad019040a0022","6125212966fad019040a0023","6125212966fad019040a0024"});
		role.setActive(false);
		role.setApproved(false);
		role.setSensitiveRole(isSensitive);
		mongoTemplate.insert(role);
		return "Role document "+roleName+" has been inserted successfully";
	}
	
	@GetMapping("/updateRole")
	public String updateRole(@RequestParam(value="", required=true) String roleID, @RequestParam(value="", required=false) String roleName, @RequestParam(value="", required=false) String roleDescription, @RequestParam(value="", required=false) boolean isSensitive, @RequestParam(value="", required=false) boolean isApproved,@RequestParam(value="", required=false) boolean isActive, @RequestParam(value="entitlements[]", required=false) String[] entitlements)
	{
		Query query = new Query(Criteria.where("_id").is(roleID));
		Update update = new Update().set("rolename",roleName).set("roleDescription", roleDescription).set("isSensitive",isSensitive).set("entitlements",entitlements).set("isActive",isActive).set("isApproved",isApproved);
		UpdateResult result = mongoTemplate.upsert(query, update, Role.class);
		
		/*Shoot an email to the approver...?*/
		
		return "Total "+result.getModifiedCount()+" Role documents have been updated successfully";
	}
	
	@GetMapping("/deleteRole")
	public String deleteRole(@RequestParam(value="", required=true) String roleID)
	{
		Query query = new Query(Criteria.where("_id").is(roleID));
		Role role = mongoTemplate.findOne(query,Role.class);
		if(role!=null)
		{
			DeleteResult result = mongoTemplate.remove(role);
			return "Total "+result.getDeletedCount()+" Role documents have been deleted successfully";
		}
		else
		{
			return "No matching roles found. Nothing to delete";
		}
	}

}
