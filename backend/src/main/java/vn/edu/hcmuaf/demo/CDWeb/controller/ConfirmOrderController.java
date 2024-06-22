package vn.edu.hcmuaf.demo.CDWeb.controller;


import org.springframework.web.bind.annotation.*;
import vn.edu.hcmuaf.demo.CDWeb.dao.OrderDao;
import vn.edu.hcmuaf.demo.CDWeb.entity.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin("http://localhost:3000")
public class ConfirmOrderController {

    private final OrderDao orderDao;

    @Autowired
    public ConfirmOrderController(OrderDao orderDao) {
        this.orderDao = orderDao;
    }

    @GetMapping("/api/orders")
    public ResponseEntity<?> getAll() {
        try {
            return ResponseEntity.ok(orderDao.getAll());
        } catch (Exception e) {
            return new ResponseEntity<>("Error confirming order: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/api/orders/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") Long id) {
        try {
            return ResponseEntity.ok(orderDao.delete(id));
        } catch (Exception e) {
            return new ResponseEntity<>("Error confirming order: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/api/confirmOrder")
    public ResponseEntity<String> confirmOrder(@RequestBody OrderRequest request) {
        try {
            orderDao.insert(request);
            return new ResponseEntity<>("Order confirmed successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error confirming order: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
