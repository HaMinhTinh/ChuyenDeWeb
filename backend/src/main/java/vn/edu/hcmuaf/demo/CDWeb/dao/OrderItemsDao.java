package vn.edu.hcmuaf.demo.CDWeb.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Logger;

public class OrderItemsDao {
    private static final Logger LOGGER = Logger.getLogger(OrderItemsDao.class.getName());

    public void insert(Integer productId, Integer orderId, Integer quantity, Double price, Double discount) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            // Connect to the database
            connection = DatabaseConnectionTest.getConnection();

            // Create the SQL statement
            String query = "INSERT INTO orderitems (ProductID, OrderID, Quantity, Price, Discount) VALUES (?, ?, ?, ?, ?)";
            preparedStatement = connection.prepareStatement(query);

            // Set parameters
            preparedStatement.setLong(1, productId);
            preparedStatement.setLong(2, orderId);
            preparedStatement.setInt(3, quantity);
            preparedStatement.setDouble(4, price);
            preparedStatement.setDouble(5, discount);

            // Execute the statement
            preparedStatement.executeUpdate();

            LOGGER.info("Inserted new order item into the database");
        } catch (SQLException e) {
            LOGGER.severe("Error inserting order item: " + e.getMessage());
            throw e;
        } finally {
            // Close the connection and statement
            if (preparedStatement != null) {
                preparedStatement.close();
            }
            if (connection != null) {
                connection.close();
            }
        }
    }

    public static void main(String[] args) throws SQLException {
        OrderItemsDao o = new OrderItemsDao();
        o.insert(1,1,3,2.0,0.0);
    }
}
