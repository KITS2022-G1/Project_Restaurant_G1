package edu.multicampus.restfullapi.model;

import java.sql.Date;
import java.util.Set;

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

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "employeeId", nullable = false)
	private Employee employee;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "customerId", nullable = false)
	private Customer customer;
	
	@OneToMany(mappedBy = "bill")
	Set<ExportBill> amount;

	public Bill() {
		super();
	}

	public Bill(String billTitle, Date billDate, int billTotalMoney) {
		super();
		this.billTitle = billTitle;
		this.billDate = billDate;
		this.billTotalMoney = billTotalMoney;
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

}
