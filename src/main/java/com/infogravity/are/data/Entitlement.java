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
@Document(collection="ENTITLEMENTS") 
public class Entitlement {
	
	@Id
	private String _id;
	private String entitlementName;
	private String entitlementDescription;
	
	public Entitlement()
	{
		_id = UUID.randomUUID().toString();
	}
	public String getEntitlementName() {
		return entitlementName;
	}
	public void setEntitlementName(String entitlementName) {
		this.entitlementName = entitlementName;
	}
	public String getEntitlementDescription() {
		return entitlementDescription;
	}
	public void setEntitlementDescription(String entitlementDescription) {
		this.entitlementDescription = entitlementDescription;
	}
	

}
