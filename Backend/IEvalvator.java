package com.Student.e.sys;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class IEvalvator {
	
	private Integer iid;
	private String ieid;
	private String name;
	private String mob;
	private String  type;
	private String address;
	private String dob;
	private String designation;
	private String pass;
	
	
	public IEvalvator()
	{
		
	}
 

	public IEvalvator(Integer iid, String ieid, String name, String mob, String type, String address, String dob,
			String designation, String pass) {
		this.iid = iid;
		this.ieid = ieid;
		this.name = name;
		this.mob = mob;
		this.type = type;
		this.address = address;
		this.dob = dob;
		this.designation = designation;
		this.pass = pass;
	}



	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getIid() {
		return iid;
	}
	public void setIid(Integer iid) {
		this.iid = iid;
	}

	public void setIeid(String ieid) {
		this.ieid = ieid;
	}
	
	public String getIeid() {
		return ieid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMob() {
		return mob;
	}

	public void setMob(String mob) {
		this.mob = mob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
		
	
}
