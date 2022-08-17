package edu.multicampus.restfullapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.multicampus.restfullapi.model.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

}
