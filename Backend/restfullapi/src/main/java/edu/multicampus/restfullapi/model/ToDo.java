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

	@Column(name = "food_id")
	private int foodId;
	
	@Column(name = "food_name")
	private String foodName;
	
	@Column(name = "food_price")
	private int foodPrice;
	
	@Column(name = "food_source")
	private String foodSource;
	
	@Column(name = "food_Image")
	private String foodImageURL;
	
	@Column(name = "food_Type")
	private String foodType;
	
	@Column(name = "food_date")
	private Date foodDate;
	
	@Column(name = "qty")
	private int qty;

	public ToDo() {
		super();
	}

	public ToDo(int foodId, String foodName, int foodPrice, String foodSource, String foodImageURL,
			String foodType, Date foodDate, int qty) {
		super();
		this.foodId = foodId;
		this.foodName = foodName;
		this.foodPrice = foodPrice;
		this.foodSource = foodSource;
		this.foodImageURL = foodImageURL;
		this.foodType = foodType;
		this.foodDate = foodDate;
		this.qty = qty;
	}

	public int getTodoId() {
		return todoId;
	}

	public void setTodoId(int todoId) {
		this.todoId = todoId;
	}

	public int getFoodId() {
		return foodId;
	}

	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public int getFoodPrice() {
		return foodPrice;
	}

	public void setFoodPrice(int foodPrice) {
		this.foodPrice = foodPrice;
	}

	public String getFoodSource() {
		return foodSource;
	}

	public void setFoodSource(String foodSource) {
		this.foodSource = foodSource;
	}

	public String getFoodImageURL() {
		return foodImageURL;
	}

	public void setFoodImageURL(String foodImageURL) {
		this.foodImageURL = foodImageURL;
	}

	public String getFoodType() {
		return foodType;
	}

	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}

	public Date getFoodDate() {
		return foodDate;
	}

	public void setFoodDate(Date foodDate) {
		this.foodDate = foodDate;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}
	
}

