package vn.edu.hcmuaf.demo.CDWeb.dao;



import vn.edu.hcmuaf.demo.CDWeb.entity.Product;

import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

public class ProductDAO {

    private static final Logger LOGGER = Logger.getLogger(ProductDAO.class.getName());

    public List<Product> getAllProducts() {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;
        List<Product> productList = new ArrayList<>();

        try {

            connection = DatabaseConnectionTest.getConnection();
            statement = connection.createStatement();

            String query = "SELECT p.id, p.name, p.description, p.price, GROUP_CONCAT(i.url) AS image_urls, p.specification, p.dateTime, p.type_id\n" +
                    "FROM products p\n" +
                    "LEFT JOIN images i ON p.id = i.products_id\n" +
                    "GROUP BY p.id";
            resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                // Read information of each product and add to the list
                Long id = resultSet.getLong("id");
                String name = resultSet.getString("name");
                String imageUrl = resultSet.getString("imageUrl");
                BigDecimal price = resultSet.getBigDecimal("price");
                String status = resultSet.getString("status");
                Integer discount = resultSet.getInt("discount");
                String description = resultSet.getString("description");
                String category = resultSet.getString("category");
                Timestamp createdAt = resultSet.getTimestamp("createdAt");
                List<String> imageUrls = new ArrayList<>();
                if (imageUrl != null && !imageUrl.isEmpty()) {
                    String[] urls = imageUrl.split(",");
                    for (String url : urls) {
                        imageUrls.add(url.trim());
                    }
                }
                Product product = new Product(id, name, imageUrl, price, status, discount, description, category, createdAt);
                productList.add(product);
            }

            LOGGER.info("Number of products retrieved: " + productList.size());
        } catch (SQLException e) {
            LOGGER.severe("Error getting products: " + e.getMessage());
        } finally {

            try {
                if (resultSet != null) resultSet.close();
                if (statement != null) statement.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                LOGGER.severe("Error closing resources: " + e.getMessage());
            }
        }

        return productList;
    }
    public static List<String> getSearchSuggestions(String query) {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;
        List<String> suggestions = new ArrayList<>();

        try {
            connection = DatabaseConnectionTest.getConnection();
            statement = connection.createStatement();

            String searchQuery = "SELECT DISTINCT name FROM products WHERE name LIKE '%" + query + "%'";
            resultSet = statement.executeQuery(searchQuery);

            while (resultSet.next()) {
                String suggestion = resultSet.getString("name");
                suggestions.add(suggestion);
            }

            LOGGER.info("Number of suggestions retrieved: " + suggestions.size());
        } catch (SQLException e) {
            LOGGER.severe("Error getting search suggestions: " + e.getMessage());
        } finally {

            try {
                if (resultSet != null) resultSet.close();
                if (statement != null) statement.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                LOGGER.severe("Error closing resources: " + e.getMessage());
            }
        }

        return suggestions;
    }


    public List<Product> getProductById(long id) throws SQLException {
        Connection connection = null;
        ResultSet resultSet = null;
        List<String> imageUrls = getImageProductById(id);
        List<Product> productList = new ArrayList<>();
        Product product = null;

        String query = "SELECT p.name, p.price, p.description\n" +
                "FROM products p\n" +
                "WHERE p.id = ?";
        try {
            connection = DatabaseConnectionTest.getConnection();
            PreparedStatement ps = connection.prepareStatement(query);

            ps.setLong(1, id);

            resultSet = ps.executeQuery();

            while (resultSet.next()) {
                String name = resultSet.getString("name");
                double price = Double.parseDouble(resultSet.getString("price"));
                String description = resultSet.getString("description");

                 product = new Product(name, description, price, imageUrls);
                productList.add(product);
            }

        } catch (Exception ex) {

        } finally {
            try {
                if (resultSet != null) resultSet.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {

            }
        }
        return productList;
    }

    public List<String> getImageProductById(long id) throws SQLException {
        Connection connection = null;
        ResultSet resultSet = null;
        List<String> list = new ArrayList<>();

        String query = "SELECT i.url\n" +
                "FROM image_url i \n" +
                "WHERE i.id = ?";
        try {
            connection = DatabaseConnectionTest.getConnection();
            PreparedStatement ps = connection.prepareStatement(query);

            ps.setLong(1, id);

            resultSet = ps.executeQuery();

            while (resultSet.next()) {
                String url = resultSet.getString("url");
                list.add(url);
            }

        } catch (Exception ex) {

        } finally {
            try {
                if (resultSet != null) resultSet.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {

            }
        }
        return list;
    }
    public static void main(String[] args) throws SQLException {
        ProductDAO dao = new ProductDAO();
        System.out.println(dao.getProductById(1));

    }
}
