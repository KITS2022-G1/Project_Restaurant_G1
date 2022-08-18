package edu.multicampus.restfullapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.multicampus.restfullapi.model.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill, Integer> {
	@Query(value ="SELECT * FROM bills bi WHERE bi.bill_name LIKE %?1%"
			+ " OR bi.bill_source LIKE %?1%",nativeQuery = true)
    public List<Bill> search(String search);
}
