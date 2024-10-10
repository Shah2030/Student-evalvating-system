package com.Student.e.sys;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class IEvalvatorService
{
	@Autowired
	private IEvalvatorRespository repo;
	
	public List<IEvalvator> listAll()
	{
		return repo.findAll();
	}
	public IEvalvator get(Integer id)
	{
		return repo.findById(id).get();
	}
	public void save(IEvalvator ies)
	{
		repo.save(ies);
	}
	public void delete(Integer id)
	{
		repo.deleteById(id);
	}
} 

