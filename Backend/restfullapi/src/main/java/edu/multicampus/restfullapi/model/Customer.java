package edu.multicampus.restfullapi.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Customers")
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int customerId;

    @OneToMany(mappedBy = "customer", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Set<Bill> bill;
    
	@Column(name="customer_name")
	private String customerName;
	
	@Column(name="customer_phone")
	private String customerPhone;
	
	@Column(name="customer_address")
	private String customerAddress;
	
	@Column(name="customer_CardNumber")
	private String customerCardNumber;

	public Customer() {
		super();
	}

	public Customer(String customerName, String customerPhone,
			String customerAddress, String customerCardNumber, Set<Bill> bill) {
		super();
		this.customerName = customerName;
		this.customerPhone = customerPhone;
		this.customerAddress = customerAddress;
		this.customerCardNumber = customerCardNumber;
		this.bill = bill;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public Set<Bill> getBill() {
		return bill;
	}

	public void setBill(Set<Bill> bill) {
		this.bill = bill;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerPhone() {
		return customerPhone;
	}

	public void setCustomerPhone(String customerPhone) {
		this.customerPhone = customerPhone;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	public String getCustomerCardNumber() {
		return customerCardNumber;
	}

	public void setCustomerCardNumber(String customerCardNumber) {
		this.customerCardNumber = customerCardNumber;
	}
	
	
}
