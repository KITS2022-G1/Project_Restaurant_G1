package edu.multicampus.restfullapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.multicampus.restfullapi.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	@Query(value ="SELECT * FROM customers c WHERE c.customer_name LIKE %?1%"
			+ " OR c.customer_address LIKE %?1%",nativeQuery = true)
    public List<Customer> search(String search);
}
