package com.myntra.config;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class Configuration {

	private Properties properties;
	 private final String propertyFilePath= "/Users/manishlalwani/eclipse-workspace/MyntraTest1Framework/src/main/resources/config.properties";
	 
	 
	 public Configuration(){
	 BufferedReader reader;
	 try {
	 reader = new BufferedReader(new FileReader(propertyFilePath));
	 properties = new Properties();
	 try {
	 properties.load(reader);
	 reader.close();
	 } catch (IOException e) {
	 e.printStackTrace();
	 }
	 } catch (FileNotFoundException e) {
	 e.printStackTrace();
	 throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
	 } 
	 }
	 
	 public String getDriverPath(){
	 String driverPath = properties.getProperty("driverPath");
	 if(driverPath!= null) return driverPath;
	 else throw new RuntimeException("driverPath not specified in the Configuration.properties file."); 
	 }
	 
	 public String getBrowser(){
		 String browser = properties.getProperty("browser");
		 if(browser!= null) return browser;
		 else throw new RuntimeException("browser not specified in the Configuration.properties file."); 
		 }
	 
	 
	 public long getImplicitlyWait() { 
	 String implicitlyWait = properties.getProperty("implicitlyWait");
	 if(implicitlyWait != null) return Long.parseLong(implicitlyWait);
	 else throw new RuntimeException("implicitlyWait not specified in the Configuration.properties file."); 
	 }
	 
	 public long getExplicitlyWait() { 
		 String explicitwait = properties.getProperty("explicitwait");
		 if(explicitwait != null) return Long.parseLong(explicitwait);
		 else throw new RuntimeException("implicitlyWait not specified in the Configuration.properties file."); 
		 }
	 public long getPageLoadWait() { 
		 String pageloadwait = properties.getProperty("pageloadwait");
		 if(pageloadwait != null) return Long.parseLong(pageloadwait);
		 else throw new RuntimeException("implicitlyWait not specified in the Configuration.properties file."); 
		 }
	 
	 
	 public String getApplicationUrl() {
	 String url = properties.getProperty("url");
	 if(url != null) return url;
	 else throw new RuntimeException("url not specified in the Configuration.properties file.");
	 }
	 
	 public String getHomePageTitle() {
	 String expectedHomePageTitle = properties.getProperty("expectedHomePageTitle");
	 if(expectedHomePageTitle != null) return expectedHomePageTitle;
	 else throw new RuntimeException("Home Page Title Not Present");
	 }
	 
	}

