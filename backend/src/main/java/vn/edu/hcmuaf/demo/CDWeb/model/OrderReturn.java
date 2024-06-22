package vn.edu.hcmuaf.demo.CDWeb.model;

import lombok.Data;

@Data
public class OrderReturn {
    private double total;
    private String status;
    private String address;
    private String method;
    private String note;
    private int ID;
}
