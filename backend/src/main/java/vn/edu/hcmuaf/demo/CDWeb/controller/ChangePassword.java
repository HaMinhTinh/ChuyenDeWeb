package vn.edu.hcmuaf.demo.CDWeb.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.hcmuaf.demo.CDWeb.dao.*;
import vn.edu.hcmuaf.demo.CDWeb.dao.CustomerDao;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ChangePassword {
    CustomerDao dao = new CustomerDao();
    @PostMapping("/changePassword")
    public ResponseEntity<?> changePassword(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String oldPass = credentials.get("oldPass");
        String newPass = credentials.get("newPass");

        if(oldPass.isEmpty() || oldPass == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mật khẩu cũ không được để trống");
        }
        if (newPass.isEmpty() || newPass == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mật khẩu mới không được để trống");
        }
        if(!dao.checkPass(username, oldPass)){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mật khẩu cũ không chính xác");
        }
        else if (dao.checkPass(username, oldPass)) {
            dao.updatePassword(username, newPass);
            return ResponseEntity.status(HttpStatus.OK).body("Đổi mật khẩu thành công");

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Đổi mật khẩu không thành công");
        }
    }
}
