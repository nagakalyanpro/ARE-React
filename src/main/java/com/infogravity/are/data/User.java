/**
 * 
 */
package com.infogravity.are.data;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data; 

 
/**
 * @author phani
 *
 */
@Data 
@Document(collection="USERS")
public class User {
	@Id
	private String _id;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	private String username;
	private String department;
	private String jobrole;
	private String managerid;
	private String[] roles;
	
	public User()
	{
		_id = UUID.randomUUID().toString();
	}
	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}
	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}
	/**
	 * @return the department
	 */
	public String getDepartment() {
		return department;
	}
	/**
	 * @param department the department to set
	 */
	public void setDepartment(String department) {
		this.department = department;
	}
	/**
	 * @return the jobrole
	 */
	public String getJobrole() {
		return jobrole;
	}
	/**
	 * @param jobrole the jobrole to set
	 */
	public void setJobrole(String jobrole) {
		this.jobrole = jobrole;
	}
	/**
	 * @return the managerid
	 */
	public String getManagerid() {
		return managerid;
	}
	/**
	 * @param managerid the managerid to set
	 */
	public void setManagerid(String managerid) {
		this.managerid = managerid;
	}
	/**
	 * @return the roles
	 */
	public String[] getRoles() {
		return roles;
	}
	/**
	 * @param roleids the roles to set
	 */
	public void setRoles(String[] roles) {
		this.roles = roles;
	}

}
