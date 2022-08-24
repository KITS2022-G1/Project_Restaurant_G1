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

import edu.multicampus.restfullapi.model.Bill;
import edu.multicampus.restfullapi.model.Customer;
import edu.multicampus.restfullapi.model.Employee;
import edu.multicampus.restfullapi.repository.BillRepository;
import edu.multicampus.restfullapi.repository.CustomerRepository;
import edu.multicampus.restfullapi.repository.EmployeesRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BillController {
	@Autowired
	BillRepository billRepository;
	
	@Autowired
	EmployeesRepository employeesRepository;
	
	@Autowired
	CustomerRepository customerRepository;

	@RequestMapping("/bills")
	public ResponseEntity<List<Bill>> getAllBills(@Param("billName") String billName) {
		try {
			List<Bill> Bills = new ArrayList<Bill>();
			
			if (billName != null) {
	            Bills = billRepository.search(billName);
	        }else {
	        	Bills = billRepository.findAll();
			}
	        
			if (Bills.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(Bills, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

	@GetMapping("/bills/{id}")
	public ResponseEntity<Bill> getBillById(@PathVariable("id") Integer id) {
		Optional<Bill> BillData = billRepository.findById(id);

		if (BillData.isPresent()) {
			return new ResponseEntity<>(BillData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/bills")
	public ResponseEntity<Bill> createBill(@RequestBody Bill Bill) {
		try {
//			Bill bill = billRepository.save(new Bill(Bill.getBillTitle(), Bill.getBillDate(), Bill.getBillTotalMoney(), Bill.getEmployee(), Bill.getCustomer()));
//			return new ResponseEntity<>(bill, HttpStatus.CREATED);
			
			Optional<Employee> employee = employeesRepository.findById(Bill.getEmployee().getEmployeeId());
			Optional<Customer> customer = customerRepository.findById(Bill.getCustomer().getCustomerId());
			
			if(employee.isPresent() && customer.isPresent()) {
				Employee exstingEmployee = employee.get();
			    Customer exstingCustomer = customer.get();
			    
			    Bill bl = billRepository.save(new Bill(Bill.getBillTitle(), Bill.getBillDate(), Bill.getBillTotalMoney(), exstingEmployee, exstingCustomer));
			  
				return new ResponseEntity<Bill>(bl, HttpStatus.CREATED);
			}else {
				return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
		
		
	}
	

	@PutMapping("/bills/{id}")
	public ResponseEntity<Bill> updateBill(@PathVariable("id") Integer id, @RequestBody Bill Bill) {
		Optional<Bill> BillData = billRepository.findById(id);

		if (BillData.isPresent()) {
			Bill bill = BillData.get();
			Bill.setBillTitle(Bill.getBillTitle());
			Bill.setBillTotalMoney(Bill.getBillTotalMoney());
			Bill.setBillDate(Bill.getBillDate());
			Bill.setCustomer(Bill.getCustomer());
			Bill.setEmployee(Bill.getEmployee());
			return new ResponseEntity<>(billRepository.save(bill), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/bills/{id}")
	public ResponseEntity<List<Bill>> deleteBill(@PathVariable("id") Integer id) {
		try {
			billRepository.deleteById(id);
			List<Bill> list = new ArrayList<Bill>();
			list = billRepository.findAll();
			return new ResponseEntity<>(list,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
}
