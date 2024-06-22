package vn.edu.hcmuaf.demo.CDWeb.services;

public class ShippingFeeService {

    private String toDistrict;
    private String toWard;

    public ShippingFeeService() {}

    public ShippingFeeService( String toDistrict, String toWard ) {

        this.toDistrict = toDistrict;
        this.toWard = toWard;

    }


    public String getToDistrict() {
        return toDistrict;
    }

    public void setToDistrict(String toDistrict) {
        this.toDistrict = toDistrict;
    }

    public String getToWard() {
        return toWard;
    }

    public void setToWard(String toWard) {
        this.toWard = toWard;
    }


}
