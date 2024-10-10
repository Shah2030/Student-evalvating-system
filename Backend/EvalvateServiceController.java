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

public class EvalvateServiceController
{
	@Autowired
	private EvalvateService service;
	//Restful API methods for retrieval operations
	@GetMapping("/er")
	public List<Evalvate> list()
	{
		return service.listAll();
	}
	@GetMapping("/er/{id}")
	public ResponseEntity<Evalvate> get(@PathVariable Integer id)
	{
		try 
		{
			Evalvate er= service.get(id);
			return new ResponseEntity<Evalvate>(er,HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<Evalvate>(HttpStatus.NOT_FOUND);
		}
	}
	//Create Operation
	@PostMapping("/er")
	public ResponseEntity<Evalvate> add(@RequestBody Evalvate er)
	{
		try
		{
			service.save(er);
			return new ResponseEntity<Evalvate>(er,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<Evalvate>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//RESTful API method for Update Operation
	@SuppressWarnings("unused")
	@PutMapping("/er/{id}")
	public ResponseEntity<?> update(@RequestBody Evalvate er, @PathVariable Integer id)
	{
		try
		{
			Evalvate existies=service.get(id);
			service.save(er);
			return new ResponseEntity<Evalvate>(er,HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<Evalvate>(HttpStatus.NOT_FOUND);
		}
	}
	
	//RESTful API method for delete operation
	@DeleteMapping("/er/{id}")
	public void delete(@PathVariable Integer id)
	{
		service.delete(id);
	}
}
