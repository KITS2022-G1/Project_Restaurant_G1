package edu.multicampus.restfullapi.model;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Foods")
public class Food {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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
	
	@OneToMany(mappedBy = "food")
	@JsonIgnore
	Set<ExportBill> amount;
	
	@ManyToMany
	@JoinTable(
	name = "customer_orders", 
	joinColumns = @JoinColumn(name = "foodId"), 
	inverseJoinColumns = @JoinColumn(name = "restableId"))
    Set<ResTable> foodt;

	public Food() {
		super();
	}

	public Food(String foodName, int foodPrice, String foodSource, String foodImageURL, Date foodDate, String foodType) {
		super();
		this.foodName = foodName;
		this.foodPrice = foodPrice;
		this.foodSource = foodSource;
		this.foodImageURL = foodImageURL;
		this.foodDate = foodDate;
		this.foodType = foodType;
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

	public Date getFoodDate() {
		return foodDate;
	}

	public void setFoodDate(Date foodDate) {
		this.foodDate = foodDate;
	}

	public String getFoodType() {
		return foodType;
	}

	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}
	
	
	
	
}
