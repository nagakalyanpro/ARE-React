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
@Document(collection="ROLES") 
public class Role {
	
	@Id
	private String _id;
	private String rolename;
	private String roledescription;
	private boolean isSensitiveRole;
	private boolean isApproved;
	private boolean isActive;
	private String[] entitlements;
	
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public boolean isSensitiveRole() {
		return isSensitiveRole;
	}
	public void setSensitiveRole(boolean isSensitiveRole) {
		this.isSensitiveRole = isSensitiveRole;
	}
	public boolean isApproved() {
		return isApproved;
	}
	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}
	public boolean isActive() {
		return isActive;
	}
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	public Role()
	{
		_id = UUID.randomUUID().toString();
	}
	public String[] getEntitlements() {
		return entitlements;
	}
	public void setEntitlements(String[] entitlements) {
		this.entitlements = entitlements;
	}
	public String getRolename() {
		return rolename;
	}
	public void setRolename(String rolename) {
		this.rolename = rolename;
	}
	public String getRoledescription() {
		return roledescription;
	}
	public void setRoledescription(String roledescription) {
		this.roledescription = roledescription;
	}
	
}
