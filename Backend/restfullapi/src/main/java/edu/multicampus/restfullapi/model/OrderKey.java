package edu.multicampus.restfullapi.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class OrderKey implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "food_id")
    Long foodId;

    @Column(name = "restable_id")
    Long restableId;

	public Long getFoodId() {
		return foodId;
	}

	public void setFoodId(Long foodId) {
		this.foodId = foodId;
	}

	public Long getRestableId() {
		return restableId;
	}

	public void setRestableId(Long restableId) {
		this.restableId = restableId;
	}

	public OrderKey() {
		super();
	}

	public OrderKey(Long foodId, Long restableId) {
		super();
		this.foodId = foodId;
		this.restableId = restableId;
	}
    
    
}
