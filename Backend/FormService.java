package com.Student.e.sys;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class FormService
{
	@Autowired
	private FormRespository repo;
	
	public List<Form> listAll()
	{
		return repo.findAll();
	}
	public Form get(Integer id)
	{
		return repo.findById(id).get();
	}
	public void save(Form fm)
	{
		repo.save(fm);
	}
	public void delete(Integer id)
	{
		repo.deleteById(id);
	}
} 

