package edu.multicampus.restfullapi.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.multicampus.restfullapi.model.ToDo;
import edu.multicampus.restfullapi.repository.TodoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TodoController {
	@Autowired
	TodoRepository todoRepository;

	@RequestMapping("/todos")
	public ResponseEntity<List<ToDo>> getAlltodos(@Param("foodTodo") String foodTodo) {
		try {
			List<ToDo> todos = new ArrayList<ToDo>();
			
			if (foodTodo != null) {
	            todos = todoRepository.search(foodTodo);
	        }else {
	        	todos = todoRepository.findAll();
			}
	        
			if (todos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(todos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	@GetMapping("/todos/{id}")
	public ResponseEntity<ToDo> getTodoById(@PathVariable("id") Integer id) {
		Optional<ToDo> TodoData = todoRepository.findById(id);

		if (TodoData.isPresent()) {
			return new ResponseEntity<>(TodoData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/todos")
	public ResponseEntity<ToDo> createTodo(@RequestBody ToDo todo) {
		try {
			ToDo todonew = todoRepository.save(new ToDo(todo.getFoodId(), todo.getFoodName(), todo.getFoodPrice(), todo.getFoodSource(), todo.getFoodImageURL() ,todo.getFoodType(), todo.getFoodDate(), todo.getQty()));
			return new ResponseEntity<>(todonew, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@DeleteMapping("/todos/{id}")
	public ResponseEntity<List<ToDo>> deleteTodo(@PathVariable("id") Integer id) {
		try {
			todoRepository.deleteById(id);
			List<ToDo> list = new ArrayList<ToDo>();
			list = todoRepository.findAll();
			return new ResponseEntity<>(list,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
}
