package com.Student.e.sys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Form {

	private Integer fid;
	private String title;
	private String deadline;
	private String notice;
	private String inpfor;
	private Integer marks;
	
	public Form()
	{
		
	}
	
	public Form(Integer fid, String title, String deadline, String notice, String inpfor, Integer marks) {
		super();
		this.fid = fid;
		this.title = title;
		this.deadline = deadline;
		this.notice = notice;
		this.inpfor = inpfor;
		this.marks = marks;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getFid() {
		return fid;
	}
	public void setFid(Integer fid) {
		this.fid = fid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDeadline() {
		return deadline;
	}
	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}
	public String getNotice() {
		return notice;
	}
	public void setNotice(String notice) {
		this.notice = notice;
	}
	public String getInpfor() {
		return inpfor;
	}
	public void setInpfor(String inpfor) {
		this.inpfor = inpfor;
	}
	public Integer getMarks() {
		return marks;
	}
	public void setMarks(Integer marks) {
		this.marks = marks;
	}
	
	
}
