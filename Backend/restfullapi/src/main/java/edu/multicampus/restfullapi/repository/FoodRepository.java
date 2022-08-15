package edu.multicampus.restfullapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.multicampus.restfullapi.model.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {

}
