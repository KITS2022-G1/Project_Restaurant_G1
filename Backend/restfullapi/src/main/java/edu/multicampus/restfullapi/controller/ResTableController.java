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

import edu.multicampus.restfullapi.model.ResTable;
import edu.multicampus.restfullapi.repository.ResTableRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ResTableController {
	@Autowired
	ResTableRepository resTableRepository;
	
	@RequestMapping("/branches")
	public ResponseEntity<List<ResTable>> getAllBranches(@Param("restableName") String restableName) {
		try {
			List<ResTable> resTables = new ArrayList<ResTable>();
			
			if (restableName != null) {
				resTables = resTableRepository.search(restableName);
	        }else {
	        	resTables = resTableRepository.findAll();
			}
	        
			if (resTables.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(resTables, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/branches/{id}")
	public ResponseEntity<ResTable> getBranchById(@PathVariable("id") Integer id) {
		Optional<ResTable> ResTableData = resTableRepository.findById(id);

		if (ResTableData.isPresent()) {
			return new ResponseEntity<>(ResTableData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/branches")
	public ResponseEntity<ResTable> createBranch(@RequestBody ResTable resTable) {
		try {
			ResTable newResTable = resTableRepository.save(new ResTable(resTable.getTableName(),resTable.getBranch()));
			return new ResponseEntity<>(newResTable, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PutMapping("/branches/{id}")
	public ResponseEntity<ResTable> updateBranch(@PathVariable("id") Integer id, @RequestBody ResTable ResTable) {
		Optional<ResTable> ResTableData = resTableRepository.findById(id);

		if (ResTableData.isPresent()) {
			ResTable resTable = ResTableData.get();
			resTable.setTableName(ResTable.getTableName());
			resTable.setBranch(ResTable.getBranch());
			return new ResponseEntity<>(resTableRepository.save(resTable), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/branches/{id}")
	public ResponseEntity<List<ResTable>> deleteBranch(@PathVariable("id") Integer id) {
		try {
			resTableRepository.deleteById(id);
			List<ResTable> list = new ArrayList<ResTable>();
			list = resTableRepository.findAll();
			return new ResponseEntity<>(list,HttpStatus.OK);
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
