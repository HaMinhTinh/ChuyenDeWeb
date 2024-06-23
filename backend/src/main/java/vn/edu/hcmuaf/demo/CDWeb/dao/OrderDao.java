package vn.edu.hcmuaf.demo.CDWeb.dao;

import vn.edu.hcmuaf.demo.CDWeb.entity.CartItem;
import vn.edu.hcmuaf.demo.CDWeb.entity.OrderRequest;
import org.springframework.stereotype.Repository;
import vn.edu.hcmuaf.demo.CDWeb.model.OrderReturn;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Repository
public class OrderDao {
    private static final Logger LOGGER = Logger.getLogger(OrderDao.class.getName());

    public Integer delete(Long id) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        Integer orderId = null;

        try {
            // Connect to the database
            connection = DatabaseConnectionTest.getConnection();

            // Create the SQL statement to insert the order
            String query = "DELETE FROM orders where ID=?";
            preparedStatement = connection.prepareStatement(query);

            preparedStatement.setLong(1, id);

            // Execute the statement
            int affectedRows = preparedStatement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Creating order failed, no rows affected.");
            }
            return 1;
        } catch (SQLException e) {
            LOGGER.severe("Error inserting order: " + e.getMessage());
            return 0;
        }
    }

    public Integer insert(OrderRequest orderRequest) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        Integer orderId = null;

        try {
            // Connect to the database
            connection = DatabaseConnectionTest.getConnection();

            // Create the SQL statement to insert the order
            String query = "INSERT INTO orders (UserID, CreationDate, TotalAmount, OrderStatus, ShippingAddress, PaymentMethod, DiscountCode, Note) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            preparedStatement = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);

            // Set parameters for the order
            preparedStatement.setInt(1, orderRequest.getUserId());
            preparedStatement.setTimestamp(2, new java.sql.Timestamp(System.currentTimeMillis()));
            preparedStatement.setString(3, orderRequest.getShippingInfo().getTotalPrice());
            preparedStatement.setString(4, orderRequest.getShippingInfo().getPaymentMethod().equals("vnpay") ? "Paid" : "Pending");
            preparedStatement.setString(5, orderRequest.getShippingInfo().getAddress() + ", " + orderRequest.getShippingInfo().getDistrict() + ", " + orderRequest.getShippingInfo().getWard() + ", " + orderRequest.getShippingInfo().getProvince());
            preparedStatement.setString(6, orderRequest.getShippingInfo().getPaymentMethod());
            preparedStatement.setString(7, "");
            preparedStatement.setString(8, orderRequest.getShippingInfo().getNote());
            // Execute the statement
            int affectedRows = preparedStatement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Creating order failed, no rows affected.");
            }

            // Get the auto-generated order ID
            resultSet = preparedStatement.getGeneratedKeys();
            if (resultSet.next()) {
                orderId = resultSet.getInt(1);
            } else {
                throw new SQLException("Creating order failed, no ID obtained.");
            }

            LOGGER.info("Inserted new order into the database with ID: " + orderId);

            // Insert order items
            OrderItemsDao orderItemsDao = new OrderItemsDao();
            for (CartItem orderItem : orderRequest.getStoredCartItems()) {
                orderItemsDao.insert(orderItem.getId(), orderId, orderItem.getQuantity(), orderItem.getPrice(), 0.0);
            }

            return orderId;
        } catch (Exception e) {
            LOGGER.severe("Error inserting order: " + e.getMessage());
            return 1;
        }
    }

    public List<OrderReturn> getAll() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        List<OrderReturn> orderReturnList = new ArrayList<>();

        try {
            // Connect to the database
            connection = DatabaseConnectionTest.getConnection();

            // Create the SQL statement to insert the order
            String query = "select * from orders;";
            preparedStatement = connection.prepareStatement(query);
            ResultSet rs = preparedStatement.executeQuery();
            while (rs.next()) {
                OrderReturn orderReturn = new OrderReturn();
                orderReturn.setID(rs.getInt("ID"));
                orderReturn.setNote(rs.getString("Note"));
                orderReturn.setTotal(rs.getDouble("TotalAmount"));
                orderReturn.setMethod(rs.getString("PaymentMethod"));
                orderReturn.setAddress(rs.getString("ShippingAddress"));
                orderReturn.setStatus(rs.getString("OrderStatus"));
                orderReturnList.add(orderReturn);
            }
            return orderReturnList;
        } catch (SQLException e) {
            LOGGER.severe("Error inserting order: " + e.getMessage());
        }
        return orderReturnList;
    }
}
