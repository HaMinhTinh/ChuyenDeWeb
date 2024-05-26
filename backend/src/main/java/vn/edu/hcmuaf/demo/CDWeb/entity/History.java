package vn.edu.hcmuaf.demo.CDWeb.entity;

public class History {
    int orderID;
    String name;
    String url;
    String date;
    String status;
    double totalPrice;
    int quantity;

    public History(int orderID, String name, String url, String date, String status, double totalPrice, int quantity) {
        this.orderID = orderID;
        this.name = name;
        this.url = url;
        this.date = date;
        this.status = status;
        this.totalPrice = totalPrice;
        this.quantity = quantity;
    }

    public History(int orderID, String name, String url, String date, String status) {
        this.orderID = orderID;
        this.name = name;
        this.url = url;
        this.date = date;
        this.status = status;
    }

    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "History{" +
                "orderID=" + orderID +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", date='" + date + '\'' +
                ", status='" + status + '\'' +
                ", totalPrice=" + totalPrice +
                ", quantity=" + quantity +
                '}';
    }
}
