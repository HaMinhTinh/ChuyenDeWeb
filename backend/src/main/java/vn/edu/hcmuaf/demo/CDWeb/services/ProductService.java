package vn.edu.hcmuaf.demo.CDWeb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.edu.hcmuaf.demo.CDWeb.entity.Product;
import vn.edu.hcmuaf.demo.CDWeb.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private static ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductService() {
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll(); // Assuming findAll() is implemented in your repository
    }

    public List<Product> getProductsByCategory(Long categoryId) {
        return productRepository.findByProductCategory(categoryId);
    }

    public List<Product> getProductByStatus (String status){
        return productRepository.findByProductStatus(status);
    }

    public  List<Product> getProductsByDiscount(int discount){
        return productRepository.findByProductDiscount(discount);
    }

    public List<Product> searchProducts(String keyword){
        List<Product> products = productRepository.searchProducts(keyword);
        return products;
    }

    public Page<Product> getProductByPage(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findAllProducts(pageable);
    }

//    public static void main(String[] args) {
////        ProductRepository repository;
//        ProductService service = new ProductService();
//        System.out.println(service.getAllProducts().size());
//    }
}