package edu.multicampus.restfullapi.model;

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

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
//@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Table(name="Employees")
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int employeeId;
	
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "branchId", nullable = false)
    private Branch branch;
    
    @OneToMany(mappedBy = "employee", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Bill> bill;
    
    @Column(name="employee_name")
	private String employeeName;
    
    @Column(name="employee_phone")
	private String employeePhone;
    
    @Column(name="employee_email")
	private String employeeEmail;
    
    @Column(name="employee_gender")
	private Boolean employeeGender;
    
    @Column(name="employee_address")
	private String employeeAddress;
    
    @Column(name="employee_role")
	private String employeeRole;
    
    @Column(name="employee_image")
	private String employeeImageURL;
    
    @Column(name="employee_username")
   	private String username;
    
    @Column(name="employee_password")
   	private String password;

	public Employee() {
		super();
	}

	public Employee(Branch branch, String employeeName, String employeePhone, String employeeEmail,
			Boolean employeeGender, String employeeAddress, String employeeRole, String employeeImageURL,
			String username, String password){
		super();
		this.branch = branch;
		this.employeeName = employeeName;
		this.employeePhone = employeePhone;
		this.employeeEmail = employeeEmail;
		this.employeeGender = employeeGender;
		this.employeeAddress = employeeAddress;
		this.employeeRole = employeeRole;
		this.employeeImageURL = employeeImageURL;
		this.username = username;
		this.password = password;
	}

	public Set<Bill> getBill() {
		return bill;
	}

	public void setBill(Set<Bill> bill) {
		this.bill = bill;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getEmployeePhone() {
		return employeePhone;
	}

	public void setEmployeePhone(String employeePhone) {
		this.employeePhone = employeePhone;
	}

	public String getEmployeeEmail() {
		return employeeEmail;
	}

	public void setEmployeeEmail(String employeeEmail) {
		this.employeeEmail = employeeEmail;
	}

	public Boolean getEmployeeGender() {
		return employeeGender;
	}

	public void setEmployeeGender(Boolean employeeGender) {
		this.employeeGender = employeeGender;
	}

	public String getEmployeeAddress() {
		return employeeAddress;
	}

	public void setEmployeeAddress(String employeeAddress) {
		this.employeeAddress = employeeAddress;
	}

	public String getEmployeeRole() {
		return employeeRole;
	}

	public void setEmployeeRole(String employeeRole) {
		this.employeeRole = employeeRole;
	}

	public String getEmployeeImageURL() {
		return employeeImageURL;
	}

	public void setEmployeeImageURL(String employeeImageURL) {
		this.employeeImageURL = employeeImageURL;
	}
    
    
}
