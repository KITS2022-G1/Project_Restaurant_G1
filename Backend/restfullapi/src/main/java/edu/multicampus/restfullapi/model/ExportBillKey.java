package edu.multicampus.restfullapi.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class ExportBillKey implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "bill_id")
    int billId;

    @Column(name = "food_id")
    int foodId;

	public ExportBillKey() {
		super();
	}

	public ExportBillKey(int billId, int foodId) {
		super();
		this.billId = billId;
		this.foodId = foodId;
	}

	public int getBillId() {
		return billId;
	}

	public void setBillId(int billId) {
		this.billId = billId;
	}

	public int getFoodId() {
		return foodId;
	}

	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
    
    
}
