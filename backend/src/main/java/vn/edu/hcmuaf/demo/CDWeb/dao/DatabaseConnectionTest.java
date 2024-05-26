package vn.edu.hcmuaf.demo.CDWeb.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnectionTest {
    public static Connection getConnection() {
        String jdbcUrl = "jdbc:mysql://localhost:3306/demo";
        String username = "root";
        String password = "";

        Connection connection = null;
        try {
            connection = DriverManager.getConnection(jdbcUrl, username, password);
            System.out.println("Kết nối đến cơ sở dữ liệu thành công!");
            return connection;

        } catch (SQLException e) {
            System.out.println("Lỗi kết nối đến cơ sở dữ liệu: " + e.getMessage());
        }
        return connection;

    }
    public static void main(String[] args) {

    }
}