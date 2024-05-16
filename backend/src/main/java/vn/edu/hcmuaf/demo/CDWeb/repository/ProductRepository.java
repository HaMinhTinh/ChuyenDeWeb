package vn.edu.hcmuaf.demo.CDWeb.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.edu.hcmuaf.demo.CDWeb.entity.Product;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;


import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT P  FROM Product P ")
    public List<Product> findGetAll();

    @Query("SELECT p FROM Product p WHERE p.category.id = :categoryId")
    List<Product> findByProductCategory(Long categoryId);

    @Query("SELECT p FROM Product p WHERE p.status = :status")
    List<Product> findByProductStatus(String status);

    @Query("SELECT p FROM Product p WHERE p.discount >= :discount")
    List<Product> findByProductDiscount(int discount);
    @Query("SELECT p FROM Product p WHERE LOWER(p.name) LIKE LOWER(concat('%', :keyword, '%'))")
    List<Product> searchProducts( String keyword);

    @Query("SELECT p FROM Product p")
    Page<Product> findAllProducts(Pageable pageable);




}

