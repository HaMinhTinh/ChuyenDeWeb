package vn.edu.hcmuaf.demo.CDWeb.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.hcmuaf.demo.CDWeb.dao.ProductDAO;
import vn.edu.hcmuaf.demo.CDWeb.entity.Product;
import vn.edu.hcmuaf.demo.CDWeb.repository.ProductRepository;
import vn.edu.hcmuaf.demo.CDWeb.services.ProductService;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    ProductDAO dao = new ProductDAO();

    @Autowired
    private  ProductService productService;

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

    @GetMapping("/detailProduct/{id}")
    public ResponseEntity<?> getProductDetail(@PathVariable("id") long id) {
        try {
            Product product = productService.getProductById(id);
            if (product != null) {
                return ResponseEntity.ok(product);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không tìm thấy sản phẩm");
            }
        } catch (Exception e) {
            // Xử lý ngoại lệ, ví dụ: in ra lỗi hoặc trả về mã lỗi phản hồi 500
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Đã xảy ra lỗi khi lấy thông tin sản phẩm");
        }
    }

    @PostMapping("/add")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    @DeleteMapping("/id/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @DeleteMapping("/name/{name}")
    public void deleteProductByName(@PathVariable String name) {
        productService.deleteProductByName(name);
    }

    @PutMapping("/update/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product newProductData) {
        return productService.updateProduct(id, newProductData);
    }

}

