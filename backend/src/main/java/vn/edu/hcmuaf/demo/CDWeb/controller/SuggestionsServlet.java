package vn.edu.hcmuaf.demo.CDWeb.controller;

import vn.edu.hcmuaf.demo.CDWeb.dao.ProductDAO;
import com.google.gson.Gson;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@RestController
@RequestMapping("/api/suggestions")
@CrossOrigin(origins = "http://localhost:3000")
public class SuggestionsServlet {

    @GetMapping
    protected void doGet(@RequestParam("query") String query, HttpServletResponse response) throws IOException {
        try {

            List<String> suggestions = ProductDAO.getSearchSuggestions(query);

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");

            String json = convertListToJson(suggestions);

            PrintWriter out = response.getWriter();
            out.print(json);
            out.flush();
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            PrintWriter out = response.getWriter();
            out.println("{\"error\": \"" + e.getMessage() + "\"}");
            out.flush();
        }
    }

    private String convertListToJson(List<String> suggestions) {

        return new Gson().toJson(suggestions);
    }
}
