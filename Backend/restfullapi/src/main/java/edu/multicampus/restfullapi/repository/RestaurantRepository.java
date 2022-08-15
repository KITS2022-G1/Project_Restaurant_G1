package edu.multicampus.restfullapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.multicampus.restfullapi.model.Branch;

public interface RestaurantRepository extends JpaRepository<Branch, Integer> {
//	List<Branch> findByNameContaining(String branchName);
}
