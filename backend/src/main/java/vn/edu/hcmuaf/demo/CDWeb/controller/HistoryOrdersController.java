package vn.edu.hcmuaf.demo.CDWeb.controller;

import vn.edu.hcmuaf.demo.CDWeb.dao.*;
import vn.edu.hcmuaf.demo.CDWeb.entity.History;
import vn.edu.hcmuaf.demo.CDWeb.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class HistoryOrdersController {
    HistoryDao dao = new HistoryDao();

    @PostMapping("/historyOrders")
    public ResponseEntity<?> changePassword(@RequestBody Map<String, String> credentials) throws SQLException {
        int id = Integer.parseInt(credentials.get("idUser"));

        if (id != 0) {
            List<History> historys = dao.getAllHistory(id);
            return ResponseEntity.ok(historys);

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không có lịch sử đơn hàng");
        }
    }

    @GetMapping("/orderDetail/{id}")
    public ResponseEntity<?> orderDetail(@PathVariable String id) throws SQLException {
        HistoryDao historyDao = new HistoryDao();
        int idd = Integer.parseInt(id);
        if ( idd!=0) {
            List<History> history = historyDao.getHistoryById(Integer.parseInt(id));
            return ResponseEntity.status(HttpStatus.OK).body(history);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tài khoản chưa tồn tại");
        }
    }

    // Thêm một endpoint mới để xử lý yêu cầu cập nhật tình trạng đơn hàng
    @PostMapping("/cancelOrder/{id}")
    public ResponseEntity<String> cancelOrder(@PathVariable String id) {
        int idd = Integer.parseInt(id);
        try {
            // Gọi phương thức updateHistoryById từ dao để cập nhật tình trạng đơn hàng
            boolean success = dao.updateHistoryById(idd);
            if (success) {
                return ResponseEntity.ok("Đã hủy đơn hàng thành công");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Không thể hủy đơn hàng");
            }
        } catch (SQLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi khi xử lý yêu cầu");
        }
    }

}