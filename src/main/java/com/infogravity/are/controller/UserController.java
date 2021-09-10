/**
 * 
 */
package com.infogravity.are.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.aggregation.SortOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.infogravity.are.data.User;
import com.infogravity.are.repository.UserRepository;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;

import reactor.core.publisher.Flux;
/**
 * @author phani
 *
 */
@RestController 
public class UserController {
	
    @Autowired
    MongoTemplate mongoTemplate;
    
	private final UserRepository userRepository;
	
	public UserController(UserRepository userRepository)
	{
		this.userRepository = userRepository;
	}
		
	@GetMapping("/allUsers")
	public Flux<User> fetchAllUsers(@RequestParam(required=false, defaultValue="") String userName)
	{
		return userRepository.findAll();
	}

	@GetMapping("/reportees")
	public Flux<User> getReportees(@RequestParam String managerID)
	{
		return userRepository.findByManagerid(managerID);
	}
	
	/*@GetMapping("/reporteeswithmatchingmgr")
	public Flux<User> getReporteesWithMatchingManager(@RequestParam String managerID)
	{
		Flux<User> users= userRepository.findByManagerid(managerID);
		return null;
	}*/
	
	@GetMapping("/reporteeswithmatchingrole")
	public String getReporteeswithmatchingrole(@RequestParam(value="", required=true) String jobRole,@RequestParam(value="", required=true) String loggedInManagerID)
	{
		MatchOperation matchCondition;
		matchCondition = Aggregation.match(Criteria.where("managerid").is(loggedInManagerID).and("jobrole").is(jobRole));
		Aggregation agg = Aggregation.newAggregation(matchCondition);
		
		AggregationResults<User> results = mongoTemplate.aggregate(agg, "USERS", User.class);
		System.out.println(results.getRawResults().toString());
		//Start constructing a JSON string for response.
		String JSON ="{\n";
		JSON += "\"UserName\":[";
		Iterator<User> itr = results.iterator();
		while(itr.hasNext())
		{
			User user = itr.next();
			JSON+="\""+user.getUsername()+"\",";			
		}
		JSON+="]}";
		
		//Remove the last occurrence of comma
		int ind = JSON.lastIndexOf(",");
		if( ind>=0 )
		    JSON = new StringBuilder(JSON).replace(ind, ind+1,"").toString();
		 
		 return JSON;
	}
	
	@GetMapping("/reporteeswithmatchingdept")
	public Flux<User> getReporteesWithMatchingDept(@RequestParam String department)
	{
		return userRepository.findByDepartment(department);

	}
	
	@GetMapping("/insertUser")
	public String insertUser(@RequestParam String userName, @RequestParam String department, @RequestParam String jobRole, @RequestParam String managerid, @RequestParam(value="roles[]", required=false) String[] roles)
	{
		User user = new User();
		user.setUsername(userName);
		user.setDepartment(department);
		user.setJobrole(jobRole);
		user.setManagerid(managerid);
		if(roles==null)
			//user.setRoles(new String []{"6125205266fad019040a0022","6125212966fad019040a0023","6125212966fad019040a0024"});
		//userRepository.save(user);
		mongoTemplate.insert(user);
		return "User document "+userName+" has been inserted successfully";
	}
	
	@GetMapping("/updateUser")
	public String updateUser(@RequestParam(value="", required=true) String userID, @RequestParam String userName, @RequestParam String department, @RequestParam(value="", required=false) String jobRole, @RequestParam(value="", required=false) String managerID, @RequestParam(value="roles[]", required=false) String[] roles)
	{
		Query query = new Query(Criteria.where("_id").is(userID));
		Update update = new Update().set("username",userName).set("department", department).set("jobrole",jobRole).set("managerid",managerID).set("roles",roles);
		UpdateResult result = mongoTemplate.upsert(query, update, User.class);
		return "Total "+result.getModifiedCount()+" User documents have been updated successfully";
	}
	
	@GetMapping("/deleteUser")
	public String deleteUser(@RequestParam(value="", required=true) String userID)
	{
		Query query = new Query(Criteria.where("_id").is(userID));
		User user = mongoTemplate.findOne(query,User.class);
		if(user!=null)
		{
			DeleteResult result = mongoTemplate.remove(query, User.class);
			return "Total "+result.getDeletedCount()+" User documents have been deleted successfully";
		}
		else
		{
			return "No matching users found. Nothing to delete";
		}
	}
	
	@GetMapping("/getUserNamesByRole")
	public String getUserNamesByRole(@RequestParam(value="", required=true) String[] roleIDs)
	{
		TreeSet<String> userNameSet = new TreeSet<String>();
	
		for(int roleCounter=0; roleCounter<roleIDs.length; roleCounter++)
		{
			MatchOperation matchCondition = Aggregation.match(Criteria.where("roles").is(roleIDs[roleCounter]));
			SortOperation sortCondition = Aggregation.sort(Sort.Direction.ASC,"username");
			Aggregation agg = Aggregation.newAggregation(matchCondition,sortCondition);
			AggregationResults<User> results = mongoTemplate.aggregate(agg, "USERS", User.class);
			
			Iterator<User> itr = results.iterator();
			while(itr.hasNext())
			{
				User user = itr.next();
				userNameSet.add(user.getUsername());
			}
		}
		
		//Start constructing a JSON string for response.
		String JSON ="{\n";
		JSON += "\"UserName\":[";
		
		Iterator<String> itr = userNameSet.iterator();
		while(itr.hasNext())
		{
			JSON+="\""+itr.next()+"\",";
		}
		
		JSON+="]}";
		
		//Remove the last occurrence of comma
		int ind = JSON.lastIndexOf(",");
		if( ind>=0 )
		    JSON = new StringBuilder(JSON).replace(ind, ind+1,"").toString();

		 return JSON;		
	}
	
	@GetMapping("/getGroupingValues")
	public String getGroupingValues(@RequestParam(value="", required=true) String criteriaName,@RequestParam(value="", required=true) String loggedInManagerID)
	{
		MatchOperation matchCondition;
		matchCondition = Aggregation.match(Criteria.where("managerid").is(loggedInManagerID));
		GroupOperation groupCondition; 
		
		if(criteriaName.equals("Job Title"))
			groupCondition = Aggregation.group("jobrole");
		else if(criteriaName.equals("Department"))
			groupCondition = Aggregation.group("department");
		else if(criteriaName.equals("Manager"))
			groupCondition = Aggregation.group("managerid");
		else
			groupCondition = Aggregation.group(("jobrole"));
		
		Aggregation agg = Aggregation.newAggregation(matchCondition,groupCondition);
		
		AggregationResults<User> results = mongoTemplate.aggregate(agg, "USERS", User.class);
		System.out.println(results.getRawResults().toString());
		//Start constructing a JSON string for response.
		String JSON ="{\n";
		JSON += "\"SuggestedRole\":[";
		Iterator<User> itr = results.iterator();
		while(itr.hasNext())
		{
			User user = itr.next();
			JSON+="\""+user.get_id()+"\",";
			/*if(criteriaName.equals("Job Title"))
				JSON+="\""+user.getJobrole()+"\",";
			else if(criteriaName.equals("Department"))
				JSON+="\""+user.getDepartment()+"\",";
			else if(criteriaName.equals("Manager"))
				JSON+="\""+user.getManagerid()+"\",";
			else
				JSON+="\""+user.getJobrole()+"\",";*/
			
		}
		JSON+="]}";
		
		//Remove the last occurrence of comma
		int ind = JSON.lastIndexOf(",");
		if( ind>=0 )
		    JSON = new StringBuilder(JSON).replace(ind, ind+1,"").toString();
		 
		 return JSON;		
	}
	
	@GetMapping("/getRoleSuggestion")
	public String getRoleSuggestion(@RequestParam(value="", required=true) String criteriaName, @RequestParam(value="", required=true) String criteriaValue )
	{
		MatchOperation matchCondition; 
		
		if(criteriaName.equals("Job Title"))
			matchCondition = Aggregation.match(Criteria.where("jobrole").is(criteriaValue));
		else if(criteriaName.equals("Department"))
			matchCondition = Aggregation.match(Criteria.where("department").is(criteriaValue));
		else if(criteriaName.equals("Manager"))
			matchCondition = Aggregation.match(Criteria.where("managerid").is(criteriaValue));
		else
			matchCondition = Aggregation.match(Criteria.where("jobrole").is(criteriaValue));
		
		
		
		Aggregation agg = Aggregation.newAggregation(matchCondition);
		
		List<User> roles = mongoTemplate.aggregate(agg, "USERS", User.class).getMappedResults();
		 		
		int len = roles.size();
		
		HashMap<String,Integer> bucket = new HashMap<String,Integer>();
		
		for(int i=0; i<len; i++)
		{
			User u = roles.get(i);
			String[] roleList = u.getRoles();
			for(int j=0; j< roleList.length ; j++)
			{
				if(bucket.containsKey(roleList[j]))
				{
					int newCount = bucket.get(roleList[j]);
					bucket.put(roleList[j], newCount+1);
				}
				else
				{
					bucket.put(roleList[j], 1);
				}
			}
		}
		
		Map<Float,String> percentageBucket = new TreeMap<Float,String>(Collections.reverseOrder());
		Iterator itr = bucket.entrySet().iterator();
		while(itr.hasNext())
		{
			Map.Entry mapElement = (Map.Entry) itr.next();
			System.out.println(mapElement.getKey() + " , "+mapElement.getValue());
			Float percentageBucketKey = (Float.parseFloat(mapElement.getValue().toString())/len)*100;
			if(percentageBucket.containsKey(percentageBucketKey))
			{
				String currentKey = percentageBucket.get(percentageBucketKey);
				percentageBucket.put(percentageBucketKey, currentKey+","+mapElement.getKey().toString());
			}
			else
			{
				percentageBucket.put(percentageBucketKey,mapElement.getKey().toString());
			}
		}
		
		itr = percentageBucket.entrySet().iterator();
		
		//Start constructing a JSON string for response.
		String JSON ="{\n";
		while(itr.hasNext())
		{
			Map.Entry mapElement = (Map.Entry) itr.next();
			JSON +="\""+mapElement.getKey()+"\":\""+mapElement.getValue()+"\",\n";
			System.out.println(mapElement.getKey() + " , "+mapElement.getValue());
		}
		JSON+="}";
		
		//Remove the last occurrence of comma
		int ind = JSON.lastIndexOf(",");
		if( ind>=0 )
		    JSON = new StringBuilder(JSON).replace(ind, ind+1,"").toString();
		
		return JSON;
	}
	
}
