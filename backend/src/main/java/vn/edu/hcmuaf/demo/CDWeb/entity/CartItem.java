package vn.edu.hcmuaf.demo.CDWeb.entity;

public class CartItem {
    private Integer id;
    private String imageUrl;
    private Double price;
    private Integer quantity;

    public CartItem(Integer id, String imageUrl, Double price, Integer quantity) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;
    }

    public CartItem(Integer id, Double price, Integer quantity) {
        this.id = id;
        this.price = price;
        this.quantity = quantity;
    }

    public CartItem() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}