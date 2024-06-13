package vn.edu.hcmuaf.demo.CDWeb.controller;

import vn.edu.hcmuaf.demo.CDWeb.utils.FreeGNH;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/feeGHN")
@CrossOrigin(origins = "http://localhost:3000")
public class FeeGNHController {

    @GetMapping
    public ResponseEntity<Map<String, String>> calculateShippingFee(@RequestParam("toDistrict") String toDistrict,
                                                                    @RequestParam("toWard") String toWard) {
        try {
            int toDistrictId = FreeGNH.getDistrictId(toDistrict);
            if (toDistrictId == -1) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Collections.singletonMap("error", "Invalid district name."));
            }

            String toWardCode = FreeGNH.getDistrictIdOfWard(toWard, toDistrictId);
            if (toWardCode == null || toWardCode.trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Collections.singletonMap("error", "Invalid ward name."));
            }

            System.out.println("Calculating fee and time for district: " + toDistrict + ", ward: " + toWard);

            String total = FreeGNH.calculateShippingFee(toDistrictId, toWardCode, 50, 50, 50, 50);
            String time = FreeGNH.calculateShippingTime(toDistrictId, toWardCode);

            // Tạo một đối tượng Map để chứa total và time
            Map<String, String> resultMap = new HashMap<>();
            resultMap.put("total", total);
            resultMap.put("time", time);

            return ResponseEntity.ok(resultMap);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("error", "Error occurred while calculating shipping fee."));
        }
    }
}
