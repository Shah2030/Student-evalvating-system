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

public class studentServiceController 
{
	@Autowired
	private StudentService service;
	//Restful API methods for retrieval operations
	@GetMapping("/students")
	public List<Student> list()
	{
		return service.listAll();
	}
	@GetMapping("/students/{id}")
	public ResponseEntity<Student> get(@PathVariable Integer id)
	{
		try 
		{
			Student students= service.get(id);
			return new ResponseEntity<Student>(students,HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
		}
	}
	//Create Operation
	@PostMapping("/students")
	public ResponseEntity<Student> add(@RequestBody Student students)
	{
		try
		{
			service.save(students);
			return new ResponseEntity<Student>(students,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<Student>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//RESTful API method for Update Operation
	@PutMapping("/students/{id}")
	public ResponseEntity<?> update(@RequestBody Student students, @PathVariable Integer id)
	{
		try
		{
			Student existstudents=service.get(id);
			service.save(students);
			return new ResponseEntity<Student>(existstudents,HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
		}
	}
	
	//RESTful API method for delete operation
	@DeleteMapping("/students/{id}")
	public void delete(@PathVariable Integer id)
	{
		service.delete(id);
	}
}
