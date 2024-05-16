package vn.edu.hcmuaf.demo.CDWeb.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "childs")
public class Childs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "product_category_id")
    private ProductCategory productCategory;

    // Constructors
    public Childs() {
    }

    public Childs(String name, ProductCategory productCategory) {
        this.name = name;
        this.productCategory = productCategory;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductCategory getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(ProductCategory productCategory) {
        this.productCategory = productCategory;
    }
}
