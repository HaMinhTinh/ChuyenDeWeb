package vn.edu.hcmuaf.demo.CDWeb.request;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class AddProductRequest {

    private String name;
    private String description;
    private BigDecimal price;
    private int discount;
    private String imageUrl;
    private Long category;
}
