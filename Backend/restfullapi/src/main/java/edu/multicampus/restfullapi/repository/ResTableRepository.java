package edu.multicampus.restfullapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import edu.multicampus.restfullapi.model.ResTable;

@Repository
public interface ResTableRepository extends JpaRepository<ResTable, Integer>{
	@Query(value ="SELECT * FROM restables rb WHERE rb.restable_name LIKE %?1%"
			+ " OR rb.restable_id LIKE %?1%",nativeQuery = true)
    public List<ResTable> search(String search);
}
