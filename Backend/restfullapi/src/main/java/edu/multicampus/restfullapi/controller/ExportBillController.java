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
import edu.multicampus.restfullapi.model.ExportBill;
import edu.multicampus.restfullapi.model.Food;
import edu.multicampus.restfullapi.repository.BillRepository;
import edu.multicampus.restfullapi.repository.ExportBillRepository;
import edu.multicampus.restfullapi.repository.FoodRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ExportBillController {
	@Autowired
	ExportBillRepository exportBillRepository;
	
	@Autowired
	FoodRepository foodRepository;

	@Autowired
	BillRepository billRepository;
	
	@RequestMapping("/ExportBills")
	public ResponseEntity<List<ExportBill>> getAllExportBills(@Param("foodId") String foodId) {
		try {
			List<ExportBill> exportBill = new ArrayList<ExportBill>();
			
			if (foodId != null) {
				exportBill = exportBillRepository.search(foodId);
	        }else {
	        	exportBill = exportBillRepository.findAll();
			}
	        
			if (exportBill.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(exportBill, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/ExportBills/{id}")
	public ResponseEntity<ExportBill> getExportBillById(@PathVariable("id") Integer id) {
		Optional<ExportBill> ExportBillData = exportBillRepository.findById(id);

		if (ExportBillData.isPresent()) {
			return new ResponseEntity<>(ExportBillData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/ExportBills")
	public ResponseEntity<ExportBill> createExportBill(@RequestBody ExportBill ExportBill) {
		try {
//			Branch branch = new Branch(ExportBill.getBranch().getBranchName(), ExportBill.getBranch().getBranchAddress(), ExportBill.getBranch().getBranchEmail(), 
//					ExportBill.getBranch().getBranchPhone(), ExportBill.getBranch().getBranchManagerName(), ExportBill.getBranch().getBranchCardNumber(), ExportBill.getBranch().getBranchImageURL());
			
			Optional<Food> food = foodRepository.findById(ExportBill.getFood().getFoodId());
			Optional<Bill> bill = billRepository.findById(ExportBill.getBill().getBillId());
			if(food.isPresent() && bill.isPresent()) {
			    Food existingFood = food.get();
			    Bill existingBill = bill.get();
			    ExportBill exBill = exportBillRepository.save(new ExportBill(existingBill, existingFood, ExportBill.getAmount()));
				return new ResponseEntity<ExportBill>(exBill, HttpStatus.CREATED);
			}else {
				return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
			}
			
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@PutMapping("/ExportBills/{id}")
	public ResponseEntity<ExportBill> updateExportBill(@PathVariable("id") Integer id, @RequestBody ExportBill ExportBill) {
		Optional<ExportBill> ExportBillData = exportBillRepository.findById(id);

		if (ExportBillData.isPresent()) {
			return new ResponseEntity<ExportBill>(exportBillRepository.save(ExportBill), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/ExportBills/{id}")
	public ResponseEntity<List<ExportBill>> deleteExportBill(@PathVariable("id") Integer id) {
		try {
			exportBillRepository.deleteById(id);
			List<ExportBill> list = new ArrayList<ExportBill>();
			list = exportBillRepository.findAll();
			return new ResponseEntity<>(list,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
}
