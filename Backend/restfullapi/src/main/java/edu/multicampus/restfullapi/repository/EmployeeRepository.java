package edu.multicampus.restfullapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.multicampus.restfullapi.model.Branch;

public interface EmployeeRepository extends JpaRepository<Branch, Long> {

}
