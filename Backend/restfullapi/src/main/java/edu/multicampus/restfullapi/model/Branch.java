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


@Entity
@Table(name="Branches")
public class Branch {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int branchId;
	
	@Column(name="branch_name")
	private String branchName;
	
	@Column(name="branch_address", length=255)
	private String branchAddress;
	
	@Column(name="branch_email")
	private String brandEmail;
	
	@Column(name="branch_phone")
	private String brandPhone;
	
	@Column(name="branch_ManagerName")
	private String brandManagerName;
	
	@Column(name="branch_CardNumber")
	private String brandCardNumber;

	@Column(name="branch_image")
	private String brandImageURL;

    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Employee> employee;
    
    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<ResTable> restable;
    
	public Branch() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Branch(String branchName, String branchAddress, String brandEmail, String brandPhone,
			String brandManagerName, String brandCardNumber, String brandImageURL) {
		super();
		this.branchName = branchName;
		this.branchAddress = branchAddress;
		this.brandEmail = brandEmail;
		this.brandPhone = brandPhone;
		this.brandManagerName = brandManagerName;
		this.brandCardNumber = brandCardNumber;
		this.brandImageURL = brandImageURL;
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

	public String getBrandEmail() {
		return brandEmail;
	}

	public void setBrandEmail(String brandEmail) {
		this.brandEmail = brandEmail;
	}

	public String getBrandPhone() {
		return brandPhone;
	}

	public void setBrandPhone(String brandPhone) {
		this.brandPhone = brandPhone;
	}

	public String getBrandManagerName() {
		return brandManagerName;
	}

	public void setBrandManagerName(String brandManagerName) {
		this.brandManagerName = brandManagerName;
	}

	public String getBrandCardNumber() {
		return brandCardNumber;
	}

	public void setBrandCardNumber(String brandCardNumber) {
		this.brandCardNumber = brandCardNumber;
	}

	public String getBrandImageURL() {
		return brandImageURL;
	}

	public void setBrandImageURL(String brandImageURL) {
		this.brandImageURL = brandImageURL;
	}
	

	
}
