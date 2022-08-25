package edu.multicampus.restfullapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.multicampus.restfullapi.model.ToDo;

public interface TodoRepository extends JpaRepository<ToDo, Integer> {
	@Query(value ="SELECT * FROM todos td WHERE td.food_todo LIKE %?1%",nativeQuery = true)
    public List<ToDo> search(String search);
}
