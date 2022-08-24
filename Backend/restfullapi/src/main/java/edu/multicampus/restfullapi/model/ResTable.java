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
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Restables")
public class ResTable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int restableId;
	
	@Column(name = "restable_name")
	private String restableName;
	
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "branchId", nullable = false)
    private Branch branch;
    

	@ManyToMany(mappedBy = "foodt")
	@JsonIgnore
    Set<Food> restable;
	
	@Column(name = "restable_status")
	private Boolean restableStatus;
	
	@Column(name = "restable_capacity")
	private int restableCapacity;
	
	public ResTable() {
		super();
	}

	public ResTable(Branch branch, String restableName, Boolean restableStatus, int restableCapacity) {
		super();
		this.branch = branch;
		this.restableName = restableName;
		this.restableStatus = restableStatus;
		this.restableCapacity = restableCapacity;
	}
	
	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}

	public Boolean getRestableStatus() {
		return restableStatus;
	}

	public void setRestableStatus(Boolean restableStatus) {
		this.restableStatus = restableStatus;
	}

	public int getRestableCapacity() {
		return restableCapacity;
	}

	public void setRestableCapacity(int restableCapacity) {
		this.restableCapacity = restableCapacity;
	}


	public int getTableId() {
		return restableId;
	}

	public void setTableId(int restableId) {
		this.restableId = restableId;
	}

	public String getTableName() {
		return restableName;
	}

	public void setTableName(String restableName) {
		this.restableName = restableName;
	}
	
	
    
    
}
