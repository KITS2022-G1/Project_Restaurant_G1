package edu.multicampus.restfullapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.multicampus.restfullapi.model.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {
	@Query(value ="SELECT * FROM foods f WHERE f.food_name LIKE %?1%"
			+ " OR f.food_source LIKE %?1%",nativeQuery = true)
    public List<Food> search(String search);
}
