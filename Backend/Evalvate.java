package com.Student.e.sys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Evalvate {

	private Integer id;
	private Integer fid;
	private String fname;
	private String usn;
	private String file;
	private String dos;
	private String iem;
	private String marks;
	private String remark;
	
	public Evalvate()
	{
		
	}
	
	public Evalvate(Integer id, Integer fid, String fname, String usn, String file, String dos, String iem,
			String marks, String remark) {
		super();
		this.id = id;
		this.fid = fid;
		this.fname = fname;
		this.usn = usn;
		this.file = file;
		this.dos = dos;
		this.iem = iem;
		this.marks = marks;
		this.remark = remark;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getFid() {
		return fid;
	}

	public void setFid(Integer fid) {
		this.fid = fid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getUsn() {
		return usn;
	}

	public void setUsn(String usn) {
		this.usn = usn;
	}

	public String getFile() {
		return file;
	}

	public void setFile(String file) {
		this.file = file;
	}

	public String getDos() {
		return dos;
	}

	public void setDos(String dos) {
		this.dos = dos;
	}

	public String getIem() {
		return iem;
	}

	public void setIem(String iem) {
		this.iem = iem;
	}

	public String getMarks() {
		return marks;
	}

	public void setMarks(String marks) {
		this.marks = marks;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	
	
	
}
