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

import edu.multicampus.restfullapi.model.Customer;
import edu.multicampus.restfullapi.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CustomerController {
	@Autowired
	CustomerRepository customerRepository;

	@RequestMapping("/customers")
	public ResponseEntity<List<Customer>> getAllCustomers(@Param("customerName") String customerName) {
		try {
			List<Customer> customers = new ArrayList<Customer>();
			
			if (customerName != null) {
	            customers = customerRepository.search(customerName);
	        }else {
	        	customers = customerRepository.findAll();
			}
	        
			if (customers.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(customers, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable("id") Integer id) {
		Optional<Customer> CustomerData = customerRepository.findById(id);

		if (CustomerData.isPresent()) {
			return new ResponseEntity<>(CustomerData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/customers")
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer Customer) {
		try {
			Customer customer = customerRepository.save(new Customer(Customer.getCustomerName(), Customer.getCustomerAddress(), Customer.getCustomerCardNumber(), Customer.getCustomerPhone()));
			return new ResponseEntity<>(customer, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PutMapping("/customers/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable("id") Integer id, @RequestBody Customer Customer) {
		Optional<Customer> CustomerData = customerRepository.findById(id);

		if (CustomerData.isPresent()) {
			Customer customer = CustomerData.get();
			customer.setCustomerName(Customer.getCustomerName());
			customer.setCustomerAddress(Customer.getCustomerAddress());
			return new ResponseEntity<>(customerRepository.save(customer), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/customers/{id}")
	public ResponseEntity<List<Customer>> deleteCustomer(@PathVariable("id") Integer id) {
		try {
			customerRepository.deleteById(id);
			List<Customer> list = new ArrayList<Customer>();
			list = customerRepository.findAll();
			return new ResponseEntity<>(list,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
}
