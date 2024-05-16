package vn.edu.hcmuaf.demo.CDWeb.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.hcmuaf.demo.CDWeb.entity.Product;
import vn.edu.hcmuaf.demo.CDWeb.services.ProductService;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
  @Autowired
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/allProduct")

    public ResponseEntity<?> getAllProducts() {
        List<Product> productList = productService.getAllProducts();
        return ResponseEntity.ok(productList);
    }

    @GetMapping("/productsByCategory")
    public ResponseEntity<?> getProductsByCategory(@RequestParam("categoryId") Long categoryId) {
        List<Product> productList = productService.getProductsByCategory(categoryId);
        return ResponseEntity.ok(productList);
    }

    @GetMapping("/productByStatus")
    public ResponseEntity<?> getProductByStatus(@RequestParam("status") String status) {
        List<Product> productList = productService.getProductByStatus(status);
        return ResponseEntity.ok(productList);
    }


    @GetMapping("/productByDiscount")
    public ResponseEntity<?> getProductByDiscount(@RequestParam("discount") int discount){
        List<Product> productList = productService.getProductsByDiscount(discount);
        return ResponseEntity.ok(productList);

    }

    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam("keyword") String keyword) {
        List<Product> productList = productService.searchProducts(keyword);
        return productList;
    }

    @GetMapping("/page")
    public ResponseEntity<Page<Product>> getProductByPage(@RequestParam("page") int page, @RequestParam("size") int size) {
        Page<Product> productPage = productService.getProductByPage(page, size);
        return ResponseEntity.ok(productPage);
    }


}

