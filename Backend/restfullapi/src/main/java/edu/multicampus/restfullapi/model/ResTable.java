package edu.multicampus.restfullapi.model;

import java.util.Set;

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

@Entity
@Table(name = "Restables")
public class ResTable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int restableId;
	
	@Column(name = "restable_name")
	private String restableName;
	
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "branchId", nullable = false)
    private Branch branch;
    
	@ManyToMany(mappedBy = "foodt")
    Set<Food> restable;
    
	public ResTable() {
		super();
	}

	public ResTable(String restableName) {
		super();
		this.restableName = restableName;
	}
	

	public ResTable(String restableName, Branch branch) {
		super();
		this.restableName = restableName;
		this.branch = branch;
	}
	
	

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
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
