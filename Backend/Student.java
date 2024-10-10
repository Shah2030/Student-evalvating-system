package com.Student.e.sys;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
	
	private Integer sid;
	private String usn;
	private String name;
	private String mob;
	private String address;
	private String dob;
	private String cource;
	
	public Student()
	{
		
	}
	
	public Student(String usn, String name, String mob, String address, String dob, String cource) {
		this.usn = usn;
		this.name = name;
		this.mob = mob;
		this.address = address;
		this.dob = dob;
		this.cource = cource;
	}


	//Getters and setters
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getSid() {
		return sid;
	}

	public void setSid(Integer sid) {
		this.sid = sid;
	}

	
	public String getUsn() {
		return usn;
	}
	public void setUsn(String usn) {
		this.usn = usn;
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

	public String getCource() {
		return cource;
	}

	public void setCource(String cource) {
		this.cource = cource;
	}
		
}

