package edu.multicampus.restfullapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.multicampus.restfullapi.model.ExportBill;

public interface ExportBillRepository extends JpaRepository<ExportBill, Integer> {
	@Query(value ="SELECT * FROM export_bill c WHERE c.billId LIKE %?1%",nativeQuery = true)
    public List<ExportBill> search(String search);

}
