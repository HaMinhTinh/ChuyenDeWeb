package vn.edu.hcmuaf.demo.CDWeb.controller;


import vn.edu.hcmuaf.demo.CDWeb.dao.OrderDao;
import vn.edu.hcmuaf.demo.CDWeb.entity.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConfirmOrderController {

    private final OrderDao orderDao;

    @Autowired
    public ConfirmOrderController(OrderDao orderDao) {
        this.orderDao = orderDao;
    }

    @PostMapping("/api/confirmOrder")
    public ResponseEntity<String> confirmOrder(@RequestBody OrderRequest request) {
        try {
            System.out.println(request.getShippingInfo().getTotalPrice() + "aaaaa");
            orderDao.insert(request);
            return new ResponseEntity<>("Order confirmed successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error confirming order: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
