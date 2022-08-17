package edu.multicampus.restfullapi.model;

import java.beans.JavaBean;
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

@Entity
@Table(name = "Branches")
@JavaBean
public class Branch {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int branchId;

	@Column(name = "branch_name")
	private String branchName;

	@Column(name = "branch_address", length = 255)
	private String branchAddress;

	@Column(name = "branch_email")
	private String branchEmail;

	@Column(name = "branch_phone")
	private String branchPhone;

	@Column(name = "branch_ManagerName")
	private String branchManagerName;

	@Column(name = "branch_CardNumber")
	private String branchCardNumber;

	@Column(name = "branch_image")
	private String branchImageURL;

	@OneToMany(mappedBy = "branch", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Employee> employee;

	@OneToMany(mappedBy = "branch", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<ResTable> restable;

	public Branch() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Branch(String branchAddress, String branchName, String branchCardNumber, String branchEmail,
			String branchImageURL, String branchManagerName, String branchPhone) {
		super();
		this.branchName = branchName;
		this.branchAddress = branchAddress;
		this.branchEmail = branchEmail;
		this.branchManagerName = branchManagerName;
		this.branchCardNumber = branchCardNumber;
		this.branchImageURL = branchImageURL;
		this.branchPhone = branchPhone;
	}

	public Branch(String branchName, String branchAddress) {
		super();
		this.branchName = branchName;
		this.branchAddress = branchAddress;
	}

	public int getBranchId() {
		return branchId;
	}

	public void setBranchId(int branchId) {
		this.branchId = branchId;
	}

	public String getBranchName() {
		return branchName;
	}

	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}

	public String getBranchAddress() {
		return branchAddress;
	}

	public void setBranchAddress(String branchAddress) {
		this.branchAddress = branchAddress;
	}

	public String getBranchEmail() {
		return branchEmail;
	}

	public void setBranchEmail(String branchEmail) {
		this.branchEmail = branchEmail;
	}

	public String getBranchPhone() {
		return branchPhone;
	}

	public void setBranchPhone(String branchPhone) {
		this.branchPhone = branchPhone;
	}

	public String getBranchManagerName() {
		return branchManagerName;
	}

	public void setBranchManagerName(String branchManagerName) {
		this.branchManagerName = branchManagerName;
	}

	public String getBranchCardNumber() {
		return branchCardNumber;
	}

	public void setBranchCardNumber(String branchCardNumber) {
		this.branchCardNumber = branchCardNumber;
	}

	public String getBranchImageURL() {
		return branchImageURL;
	}

	public void setBranchImageURL(String branchImageURL) {
		this.branchImageURL = branchImageURL;
	}

}
