package edu.multicampus.restfullapi.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Todos")
public class ToDo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int todoId;

	@Column(name = "food_todo")
	private String foodTodo;

	@Column(name = "food_amount")
	private int foodAmount;
	
	@Column(name = "food_time")
	private Date foodTime;

	public ToDo() {
		super();
	}

	public ToDo(String foodTodo, int foodAmount, Date foodTime) {
		super();
		this.foodTodo = foodTodo;
		this.foodAmount = foodAmount;
		this.foodTime = foodTime;
	}

	public int getTodoId() {
		return todoId;
	}

	public void setTodoId(int todoId) {
		this.todoId = todoId;
	}

	public String getFoodTodo() {
		return foodTodo;
	}

	public void setFoodTodo(String foodTodo) {
		this.foodTodo = foodTodo;
	}

	public int getFoodAmount() {
		return foodAmount;
	}

	public void setFoodAmount(int foodAmount) {
		this.foodAmount = foodAmount;
	}

	public Date getFoodTime() {
		return foodTime;
	}

	public void setFoodTime(Date foodTime) {
		this.foodTime = foodTime;
	}
	
	
}

