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

import edu.multicampus.restfullapi.model.Food;
import edu.multicampus.restfullapi.repository.FoodRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class FoodController {
	@Autowired
	FoodRepository foodRepository;

	@RequestMapping("/foods")
	public ResponseEntity<List<Food>> getAllFoods(@Param("foodName") String foodName) {
		try {
			List<Food> foods = new ArrayList<Food>();
			
			if (foodName != null) {
	            foods = foodRepository.search(foodName);
	        }else {
	        	foods = foodRepository.findAll();
			}
	        
			if (foods.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(foods, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

	@GetMapping("/foods/{id}")
	public ResponseEntity<Food> getFoodById(@PathVariable("id") Integer id) {
		Optional<Food> FoodData = foodRepository.findById(id);

		if (FoodData.isPresent()) {
			return new ResponseEntity<>(FoodData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/foods")
	public ResponseEntity<Food> createFood(@RequestBody Food Food) {
		try {
			Food food = foodRepository.save(new Food(Food.getFoodName(), Food.getFoodPrice(), Food.getFoodSource(), Food.getFoodImageURL(), Food.getFoodDate(), Food.getFoodType()));
			return new ResponseEntity<>(food, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PutMapping("/foods/{id}")
	public ResponseEntity<Food> updateFood(@PathVariable("id") Integer id, @RequestBody Food Food) {
		Optional<Food> FoodData = foodRepository.findById(id);

		if (FoodData.isPresent()) {
			Food food = FoodData.get();
			food.setFoodName(Food.getFoodName());
			food.setFoodPrice(Food.getFoodPrice());
			food.setFoodSource(Food.getFoodSource());
			food.setFoodDate(Food.getFoodDate());
			food.setFoodType(Food.getFoodType());
			return new ResponseEntity<>(foodRepository.save(food), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/foods/{id}")
	public ResponseEntity<List<Food>> deleteFood(@PathVariable("id") Integer id) {
		try {
			foodRepository.deleteById(id);
			List<Food> list = new ArrayList<Food>();
			list = foodRepository.findAll();
			return new ResponseEntity<>(list,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
}
