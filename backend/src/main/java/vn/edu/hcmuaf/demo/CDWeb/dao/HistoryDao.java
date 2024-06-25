package vn.edu.hcmuaf.demo.CDWeb.dao;

import vn.edu.hcmuaf.demo.CDWeb.entity.History;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class HistoryDao {

    public List<History> getAllHistory(int userId) throws SQLException {
        String query = "SELECT * FROM orders " +
                "JOIN orderitems ON orderitems.OrderID = orders.ID " +
                "JOIN products ON products.id = orderitems.ProductID " +
                "JOIN customer ON customer.id_user = orders.UserID " +
                "WHERE orders.UserID = ?";

        List<History> historyList = new ArrayList<>();

        try (Connection connection = DatabaseConnectionTest.getConnection();
             PreparedStatement ps = connection.prepareStatement(query)) {

            ps.setInt(1, userId);

            try (ResultSet resultSet = ps.executeQuery()) {
                while (resultSet.next()) {
                    int orderId = resultSet.getInt("OrderID");
                    String name = resultSet.getString("name");
                    String url = resultSet.getString("image_url");
                    String date = resultSet.getString("CreationDate");
                    String status = resultSet.getString("OrderStatus");

                    History history = new History(orderId, name, url, date, status);
                    historyList.add(history);
                }
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            throw ex; // Ném lại SQLException để xử lý ở lớp gọi
        }

        return historyList;
    }

    public List<History> getHistoryById(int userId) throws SQLException {
        String query = "SELECT od.OrderID, p.name, p.image_url AS url, o.CreationDate AS date, o.OrderStatus AS status, od.Quantity, od.Price " +
                "FROM orders o " +
                "JOIN orderitems od ON o.ID = od.OrderID " +
                "JOIN products p ON p.id = od.ProductID " +
                "JOIN customer c ON c.id_user = o.UserID " +
                "WHERE od.OrderId = ?";

        List<History> historyList = new ArrayList<>();

        try (Connection connection = DatabaseConnectionTest.getConnection();
             PreparedStatement ps = connection.prepareStatement(query)) {

            ps.setInt(1, userId);

            try (ResultSet resultSet = ps.executeQuery()) {
                while (resultSet.next()) {
                    int orderId = resultSet.getInt("OrderID");
                    String name = resultSet.getString("name");
                    String url = resultSet.getString("url");
                    String date = resultSet.getString("date");
                    String status = resultSet.getString("status");
                    int quantity = resultSet.getInt("Quantity");
                    double price = resultSet.getDouble("Price");

                    History history = new History(orderId, name, url, date, status, price, quantity);
                    historyList.add(history);
                }
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            throw ex; // Ném lại SQLException để xử lý ở lớp gọi
        }

        return historyList;
    }

    public boolean updateHistoryById(int orderId) throws SQLException {
        String query = "UPDATE orders SET OrderStatus = 'Đã hủy' WHERE ID = ?";

        try (Connection connection = DatabaseConnectionTest.getConnection();
             PreparedStatement ps = connection.prepareStatement(query)) {

            ps.setInt(1, orderId);
            int affectedRows = ps.executeUpdate();

            return affectedRows > 0;

        } catch (SQLException ex) {
            ex.printStackTrace();
            throw ex; // Ném lại SQLException để xử lý ở lớp gọi
        }
    }

    public static void main(String[] args) throws SQLException {
        HistoryDao dao = new HistoryDao();

        // Test getAllHistory
        List<History> historyList = dao.getAllHistory(134);
        for (History h : historyList) {
            System.out.println(h);
        }

        // Test getHistoryById
        List<History> historyById = dao.getHistoryById(1);
        for (History h : historyById) {
            System.out.println(h);
        }

        // Test updateHistoryById
        boolean updated = dao.updateHistoryById(1);
        System.out.println("Order updated: " + updated);
    }
}
