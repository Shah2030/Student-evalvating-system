package com.Student.e.sys;


import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController

public class IEvalvatorServiceController
{
	@Autowired
	private IEvalvatorService service;
	//Restful API methods for retrieval operations
	@GetMapping("/ies")
	public List<IEvalvator> list()
	{
		return service.listAll();
	}
	@GetMapping("/ies/{id}")
	public ResponseEntity<IEvalvator> get(@PathVariable Integer id)
	{
		try 
		{
			IEvalvator ies= service.get(id);
			return new ResponseEntity<IEvalvator>(ies,HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<IEvalvator>(HttpStatus.NOT_FOUND);
		}
	}
	//Create Operation
	@PostMapping("/ies")
	public ResponseEntity<IEvalvator> add(@RequestBody IEvalvator ies)
	{
		try
		{
			service.save(ies);
			return new ResponseEntity<IEvalvator>(ies,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<IEvalvator>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//RESTful API method for Update Operation
	@SuppressWarnings("unused")
	@PutMapping("/ies/{id}")
	public ResponseEntity<?> update(@RequestBody IEvalvator ies, @PathVariable Integer id)
	{
		try
		{
			IEvalvator existies=service.get(id);
			service.save(ies);
			return new ResponseEntity<IEvalvator>(ies,HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<IEvalvator>(HttpStatus.NOT_FOUND);
		}
	}
	
	//RESTful API method for delete operation
	@DeleteMapping("/ies/{id}")
	public void delete(@PathVariable Integer id)
	{
		service.delete(id);
	}
}
