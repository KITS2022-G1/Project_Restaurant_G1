package edu.multicampus.restfullapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.multicampus.restfullapi.model.Branch;

@Repository
public interface RestaurantRepository extends JpaRepository<Branch, Integer> {
//	List<Branch> findByNameContaining(String branchName);
	@Query(value ="SELECT * FROM branches b WHERE b.branch_name LIKE %?1%"
			+ " OR b.branch_address LIKE %?1%"
			+ " OR b.branch_email LIKE %?1%",nativeQuery = true)
    public List<Branch> search(String branchName);
}
