package vn.edu.hcmuaf.demo.CDWeb.dao;

import vn.edu.hcmuaf.demo.CDWeb.entity.History;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class HistoryDao {

    public List<History> getAllHistory(int id) throws SQLException {
        Connection connection = null;
        ResultSet resultSet = null;
        List<History> historyList = new ArrayList<>();

        String query = "SELECT o.OrderID, p.`name`, i.url, o.CreationDate, o.OrderStatus " +
                "FROM orders o " +
                "JOIN orderitems od ON o.OrderID = od.OrderID " +
                "JOIN products p ON p.id = od.ProductID " +
                "JOIN images i ON i.products_id = p.id " +
                "JOIN customer c ON c.id_user = o.UserID " +
                "WHERE c.id_user = ?";
        try {
            // Connect to the database
            connection = DatabaseConnectionTest.getConnection();
            PreparedStatement ps = connection.prepareStatement(query);

            ps.setInt(1, id);

            resultSet = ps.executeQuery(); // Execute the query without passing 'query' parameter

            // Process the results
            while (resultSet.next()) {
                // Read information of each product and add to the list
                int orderId = resultSet.getInt("OrderID");
                String name = resultSet.getString("name");
                String url = resultSet.getString("url");
                String date = resultSet.getString("CreationDate");
                String status = resultSet.getString("OrderStatus");

                // Create a History object and add to the list
                History history = new History(orderId, name, url, date, status);
                historyList.add(history);
            }

        } catch (Exception ex) {
            // Handle exceptions
        } finally {
            // Close resources in the finally block
            try {
                if (resultSet != null) resultSet.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                // Handle exceptions
            }
        }

        return historyList;
    }

    public List<History> getHistoryById(int id) throws SQLException {
        Connection connection = null;
        ResultSet resultSet = null;
        List<History> historyList = new ArrayList<>();

        String query = "SELECT o.OrderID, p.`name`, i.url, o.CreationDate, o.OrderStatus, od.Quantity, od.Price " +
                "FROM orders o " +
                "JOIN orderitems od ON o.OrderID = od.OrderID " +
                "JOIN products p ON p.id = od.ProductID " +
                "JOIN images i ON i.products_id = p.id " +
                "JOIN customer c ON c.id_user = o.UserID " +
                "WHERE c.id_user = ?";
        try {
            // Connect to the database
            connection = DatabaseConnectionTest.getConnection();
            PreparedStatement ps = connection.prepareStatement(query);

            ps.setInt(1, id);

            resultSet = ps.executeQuery(); // Execute the query without passing 'query' parameter

            // Process the results
            while (resultSet.next()) {
                // Read information of each product and add to the list
                int orderId = resultSet.getInt("OrderID");
                String name = resultSet.getString("name");
                String url = resultSet.getString("url");
                String date = resultSet.getString("CreationDate");
                String status = resultSet.getString("OrderStatus");
                int quantity = Integer.parseInt(resultSet.getString("Quantity"));
                double price = Double.parseDouble(resultSet.getString("Price"));

                History history = new History(orderId, name, url, date, status, price, quantity);
                historyList.add(history);
            }

        } catch (Exception ex) {
            // Handle exceptions
        } finally {
            // Close resources in the finally block
            try {
                if (resultSet != null) resultSet.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                // Handle exceptions
            }
        }
        return historyList;
    }

    public boolean updateHistoryById(int id) throws SQLException {
        Connection connection = null;
        int affect =0;
        boolean result =false;
        String query = "update orders\n" +
                "set OrderStatus = 'Đã hủy'\n" +
                "WHERE OrderID = ?";
        try {
            // Connect to the database
            connection = DatabaseConnectionTest.getConnection();
            PreparedStatement ps = connection.prepareStatement(query);
            ps.setInt(1, id);

            affect = ps.executeUpdate();
            if (affect !=0) result = true;
        } catch (Exception ex) {
        } finally {
        try {
            if (connection != null) connection.close();
        } catch (SQLException e) {
            // Handle exceptions
        }
    }
        return result;
    }

    public static void main(String[] args) throws SQLException {
        HistoryDao dao = new HistoryDao();
        for (History h : dao.getHistoryById(1) ){
            System.out.println(h);
        }
//        System.out.println(dao.getHistoryById(1));
    }
}
