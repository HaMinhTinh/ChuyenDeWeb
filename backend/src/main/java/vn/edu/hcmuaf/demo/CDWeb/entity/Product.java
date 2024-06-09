package vn.edu.hcmuaf.demo.CDWeb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "status")
    private String status;

    @Column(name = "discount")
    private int discount;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "categoryId", referencedColumnName = "id")
    private ProductCategory category;

    @Column(name = "created_at")
    private Timestamp createdAt;


    public Product() {
        // Default constructor
    }

    public Product(String name, String imageUrl, BigDecimal price, String status, int discount, String description, ProductCategory category, Timestamp createdAt) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.status = status;
        this.discount = discount;
        this.description = description;
        this.category = category;
        this.createdAt = createdAt;
    }

    public Product(String name, String description, double price, List<String> imageUrls) {
    }

    public Product(Long id, String name, String imageUrl, BigDecimal price, String status, Integer discount, String description, String category, Timestamp createdAt) {
    }


}
