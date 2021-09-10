/**
 * 
 */
package com.infogravity.are.controller;

import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperationContext;

/**
 * @author phani
 *
 */
public class UserAggregationOperation implements AggregationOperation{

	private String jsonOperation;

	  public UserAggregationOperation(String jsonOperation) {
	    this.jsonOperation = jsonOperation;
	  }

	  @Override
	  public org.bson.Document toDocument(AggregationOperationContext aggregationOperationContext) {
	    return aggregationOperationContext.getMappedObject(org.bson.Document.parse(jsonOperation));
	  }
}
