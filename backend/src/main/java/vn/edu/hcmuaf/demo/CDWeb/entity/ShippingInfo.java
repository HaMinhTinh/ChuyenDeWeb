package vn.edu.hcmuaf.demo.CDWeb.entity;

public class ShippingInfo {
    private String name;
    private String phone;
    private String email;
    private String address;
    private String ward;
    private String district;
    private String province;
    private String note;
    private String paymentMethod;
    private String totalPrice;


    public ShippingInfo() {
    }

    public ShippingInfo(String name, String phone, String email, String address, String ward, String district, String province, String note, String paymentMethod, String totalPrice) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.ward = ward;
        this.district = district;
        this.province = province;
        this.note = note;
        this.paymentMethod = paymentMethod;
        this.totalPrice = totalPrice;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getWard() {
        return ward;
    }

    public void setWard(String ward) {
        this.ward = ward;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }
}
