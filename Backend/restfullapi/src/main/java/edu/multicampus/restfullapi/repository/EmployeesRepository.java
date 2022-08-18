package edu.multicampus.restfullapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.multicampus.restfullapi.model.Employee;

@Repository
public interface EmployeesRepository extends JpaRepository<Employee, Integer> {
	@Query(value ="SELECT * FROM employees b WHERE b.employee_name LIKE %?1%"
			+ " OR b.employee_address LIKE %?1%"
			+ " OR b.employee_email LIKE %?1%",nativeQuery = true)
    public List<Employee> search(String search);
}
