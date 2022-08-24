package edu.multicampus.restfullapi.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.multicampus.restfullapi.model.Branch;
import edu.multicampus.restfullapi.model.Employee;
import edu.multicampus.restfullapi.repository.EmployeesRepository;
import edu.multicampus.restfullapi.repository.RestaurantRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeesController {
	@Autowired
	EmployeesRepository employeesRepository;
	@Autowired
	RestaurantRepository branchRepository;
	
	@RequestMapping("/employees")
	public ResponseEntity<List<Employee>> getAllEmployees(@Param("employeeName") String employeeName) {
		try {
			List<Employee> employees = new ArrayList<Employee>();
			
			if (employeeName != null) {
				employees = employeesRepository.search(employeeName);
	        }else {
	        	employees = employeesRepository.findAll();
			}
	        
			if (employees.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(employees, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Integer id) {
		Optional<Employee> EmployeeData = employeesRepository.findById(id);

		if (EmployeeData.isPresent()) {
			return new ResponseEntity<>(EmployeeData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/employees")
	public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
		try {
//			Branch branch = new Branch(employee.getBranch().getBranchName(), employee.getBranch().getBranchAddress(), employee.getBranch().getBranchEmail(), 
//					employee.getBranch().getBranchPhone(), employee.getBranch().getBranchManagerName(), employee.getBranch().getBranchCardNumber(), employee.getBranch().getBranchImageURL());
			
			Optional<Branch> branch = branchRepository.findById(employee.getBranch().getBranchId());
			if(branch.isPresent()) {
			    Branch existingBranch = branch.get();
			    Employee emp = employeesRepository.save(new Employee(existingBranch, employee.getEmployeeName(), employee.getEmployeePhone(), employee.getEmployeeEmail(),employee.getEmployeeGender(), employee.getEmployeeAddress(), employee.getEmployeeRole(), employee.getEmployeeImageURL(), employee.getUsername(), employee.getPassword()));
				return new ResponseEntity<Employee>(emp, HttpStatus.CREATED);
			}else {
				return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
			}
			
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Integer id, @RequestBody Employee Employee) {
		Optional<Employee> EmployeeData = employeesRepository.findById(id);

		if (EmployeeData.isPresent()) {
			Employee employee = EmployeeData.get();
			employee.setBranch(Employee.getBranch());
			employee.setEmployeeName(Employee.getEmployeeName());
			employee.setEmployeeAddress(Employee.getEmployeeAddress());
			employee.setEmployeeEmail(Employee.getEmployeeEmail());
			return new ResponseEntity<Employee>(employeesRepository.save(employee), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<List<Employee>> deleteEmployee(@PathVariable("id") Integer id) {
		try {
			employeesRepository.deleteById(id);
			List<Employee> list = new ArrayList<Employee>();
			list = employeesRepository.findAll();
			return new ResponseEntity<>(list,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
}
