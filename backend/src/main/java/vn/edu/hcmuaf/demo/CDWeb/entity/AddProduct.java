package vn.edu.hcmuaf.demo.CDWeb.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AddProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double price;
    private int discount;
    private String imageUrl;
    private String status;
    @ManyToOne
    @JoinColumn(name = "categoryId", referencedColumnName = "id")
    private ProductCategory category;

}
