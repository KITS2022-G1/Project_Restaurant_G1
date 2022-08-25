package edu.multicampus.restfullapi.model;

import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Bills")
public class Bill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int billId;

	@Column(name = "bill_title")
	private String billTitle;

	@Column(name = "bill_date")
	private Date billDate;
	
	@Column(name = "bill_totalMoney")
	private int billTotalMoney;
	

	public int getBillTotalMoney() {
		return billTotalMoney;
	}

	public void setBillTotalMoney(int billTotalMoney) {
		this.billTotalMoney = billTotalMoney;
	}

	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL, optional = false)
	@JoinColumn(name = "employeeId", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Employee employee;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL, optional = false)
	@JoinColumn(name = "customerId", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Customer customer;
	
	@OneToMany(mappedBy = "bill", fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	Set<ExportBill> amount;
	
	
	public Set<ExportBill> getAmount() {
		return amount;
	}

	public void setAmount(Set<ExportBill> amount) {
		this.amount = amount;
	}

	public Bill() {
		super();
	}

	public Bill(String billTitle, Date billDate, int billTotalMoney, Employee employee, Customer customer) {
		super();
		this.billTitle = billTitle;
		this.billDate = billDate;
		this.billTotalMoney = billTotalMoney;
		this.employee = employee;
		this.customer = customer;
	}

	public int getBillId() {
		return billId;
	}

	public void setBillId(int billId) {
		this.billId = billId;
	}

	public String getBillTitle() {
		return billTitle;
	}

	public void setBillTitle(String billTitle) {
		this.billTitle = billTitle;
	}

	public Date getBillDate() {
		return billDate;
	}

	public void setBillDate(Date billDate) {
		this.billDate = billDate;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	
}
