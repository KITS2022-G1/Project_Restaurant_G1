package edu.multicampus.restfullapi.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class ExportBill {
	@EmbeddedId
    ExportBillKey id;

    @ManyToOne
    @MapsId("billId")
    @JoinColumn(name = "bill_id")
    Bill bill;

    @ManyToOne
    @MapsId("foodId")
    @JoinColumn(name = "food_id")
    Food food;

    @Column(name ="amount")
    int amount;
   

	public ExportBill() {
		super();
	}

	public ExportBill(Bill bill, Food food, int amount) {
		super();
		this.bill = bill;
		this.food = food;
		this.amount = amount;
	}

	public ExportBillKey getId() {
		return id;
	}

	public void setId(ExportBillKey id) {
		this.id = id;
	}

	public Bill getBill() {
		return bill;
	}

	public void setBill(Bill bill) {
		this.bill = bill;
	}

	public Food getFood() {
		return food;
	}

	public void setFood(Food food) {
		this.food = food;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	
    
    
}
