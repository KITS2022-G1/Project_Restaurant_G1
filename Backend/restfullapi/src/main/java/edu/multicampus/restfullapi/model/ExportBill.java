package edu.multicampus.restfullapi.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class ExportBill {
	@EmbeddedId
    ExportBillKey id;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL, optional = false)
    @MapsId("billId")
    @JoinColumn(name = "bill_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    Bill bill;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL, optional = false)
    @MapsId("foodId")
    @JoinColumn(name = "food_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    Food food;

    @Column(name ="amount")
    @OnDelete(action = OnDeleteAction.CASCADE)
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
