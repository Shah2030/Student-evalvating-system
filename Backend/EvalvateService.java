package com.Student.e.sys;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class EvalvateService
{
	@Autowired
	private EvalvateRespository repo;
	
	public List<Evalvate> listAll()
	{
		return repo.findAll();
	}
	public Evalvate get(Integer id)
	{
		return repo.findById(id).get();
	}
	public void save(Evalvate er)
	{
		repo.save(er);
	}
	public void delete(Integer id)
	{
		repo.deleteById(id);
	}
} 