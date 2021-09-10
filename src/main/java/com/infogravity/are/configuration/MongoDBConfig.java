/**
 * 
 */
package com.infogravity.are.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
/**
 * @author phani
 *
 */

@Configuration
public class MongoDBConfig extends AbstractMongoClientConfiguration {
	
    @Override
    protected String getDatabaseName() {
        return "ARE";
    }

    @Override
    public MongoClient mongoClient() {
      
        
        ConnectionString connectionString = new ConnectionString("mongodb+srv://AREAdmin:LuH|LJ+v!9E)@cluster0.igmjz.mongodb.net/ARE?retryWrites=true&w=majority");
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString(connectionString)
                .build();
        return MongoClients.create(settings);
    }

}