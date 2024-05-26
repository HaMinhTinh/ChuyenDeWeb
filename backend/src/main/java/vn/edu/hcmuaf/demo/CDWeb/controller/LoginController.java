package vn.edu.hcmuaf.demo.CDWeb.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.hcmuaf.demo.CDWeb.dao.*;
import vn.edu.hcmuaf.demo.CDWeb.dao.CustomerDao;
import vn.edu.hcmuaf.demo.CDWeb.entity.Customer;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    CustomerDao dao = new CustomerDao();

    @PostMapping("/login")
    public ResponseEntity<?> register(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        if(username.isEmpty() &&  password.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Thông tin người dùng và mật khẩu không được để trống");
        }
        if (username.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Thông tin người dùng không được để trống");
        }
        if(password.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mật khẩu không được để trống");
        }
        else if (dao.login(username, password) == true) {
//            Customer c = new Customer(username, password, "","","","");
            Customer c = dao.getUserInfo(username);
            return ResponseEntity.ok(c);
//            return ResponseEntity.status(HttpStatus.OK).body("Đăng nhập thành công");

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Đăng nhập không thành công");
        }
    }

}
