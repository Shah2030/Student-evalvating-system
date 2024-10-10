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

public class FormServiceController
{
	@Autowired
	private FormService service;
	//Restful API methods for retrieval operations
	@GetMapping("/fm")
	public List<Form> list()
	{
		return service.listAll();
	}
	@GetMapping("/fm/{id}")
	public ResponseEntity<Form> get(@PathVariable Integer id)
	{
		try 
		{
			Form fm= service.get(id);
			return new ResponseEntity<Form>(fm,HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<Form>(HttpStatus.NOT_FOUND);
		}
	}
	//Create Operation
	@PostMapping("/fm")
	public ResponseEntity<Form> add(@RequestBody Form fm)
	{
		try
		{
			service.save(fm);
			return new ResponseEntity<Form>(fm,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<Form>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//RESTful API method for Update Operation
	@SuppressWarnings("unused")
	@PutMapping("/fm/{id}")
	public ResponseEntity<?> update(@RequestBody Form fm, @PathVariable Integer id)
	{
		try
		{
			Form existies=service.get(id);
			service.save(fm);
			return new ResponseEntity<Form>(fm,HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<Form>(HttpStatus.NOT_FOUND);
		}
	}
	
	//RESTful API method for delete operation
	@DeleteMapping("/fm/{id}")
	public void delete(@PathVariable Integer id)
	{
		service.delete(id);
	}
}
