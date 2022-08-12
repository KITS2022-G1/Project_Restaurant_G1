package edu.multicampus.restfullapi.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class Order {
	@EmbeddedId
    OrderKey id;

    @ManyToOne
    @MapsId("foodId")
    @JoinColumn(name = "food_id")
    Food food;

    @ManyToOne
    @MapsId("restableId")
    @JoinColumn(name = "restable_id")
    ResTable resTable;

    int order;

	public Order() {
		super();
	}

	public Order(OrderKey id, Food food, ResTable resTable, int order) {
		super();
		this.id = id;
		this.food = food;
		this.resTable = resTable;
		this.order = order;
	}

	public OrderKey getId() {
		return id;
	}

	public void setId(OrderKey id) {
		this.id = id;
	}

	public Food getFood() {
		return food;
	}

	public void setFood(Food food) {
		this.food = food;
	}

	public ResTable getResTable() {
		return resTable;
	}

	public void setResTable(ResTable resTable) {
		this.resTable = resTable;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}
    
    
}
