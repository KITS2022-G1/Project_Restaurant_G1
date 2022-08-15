package edu.multicampus.restfullapi.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.multicampus.restfullapi.model.Branch;
import edu.multicampus.restfullapi.repository.RestaurantRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RestaurantController {
	@Autowired
	RestaurantRepository restaurantRepository;

	@GetMapping("/branches")
	public ResponseEntity<List<Branch>> getAllBranches(@RequestParam(required = false) String branchName) {
		try {
			List<Branch> branches = new ArrayList<Branch>();

			if (branchName == null)
				restaurantRepository.findAll().forEach(branches::add);
//			else
//				restaurantRepository.findByNameContaining(branchName).forEach(branches::add);

			if (branches.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(branches, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/branches/{id}")
	public ResponseEntity<Branch> getBranchById(@PathVariable("id") Integer id) {
		Optional<Branch> BranchData = restaurantRepository.findById(id);

		if (BranchData.isPresent()) {
			return new ResponseEntity<>(BranchData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/branches")
	public ResponseEntity<Branch> createBranch(@RequestBody Branch Branch) {
		try {
			Branch branch = restaurantRepository.save(new Branch(Branch.getBranchAddress(), Branch.getBranchName(),
					Branch.getBranchCardNumber(), Branch.getBranchEmail(), Branch.getBranchImageURL(),
					Branch.getBranchManagerName(), Branch.getBranchPhone()));
			return new ResponseEntity<>(branch, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PutMapping("/branches/{id}")
	public ResponseEntity<Branch> updateBranch(@PathVariable("id") Integer id, @RequestBody Branch Branch) {
		Optional<Branch> BranchData = restaurantRepository.findById(id);

		if (BranchData.isPresent()) {
			Branch branch = BranchData.get();
			branch.setBranchName(Branch.getBranchName());
			branch.setBranchAddress(Branch.getBranchAddress());
			branch.setBranchEmail(Branch.getBranchEmail());
			return new ResponseEntity<>(restaurantRepository.save(branch), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/branches/{id}")
	public ResponseEntity<HttpStatus> deleteBranch(@PathVariable("id") Integer id) {
		try {
			restaurantRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

//	@DeleteMapping("/branches")
//	public ResponseEntity<HttpStatus> deleteAllbranches() {
//		try {
//			restaurantRepository.deleteAll();
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
//		}
//
//	}

}
