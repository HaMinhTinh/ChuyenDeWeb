package vn.edu.hcmuaf.demo.CDWeb.services;

import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.edu.hcmuaf.demo.CDWeb.entity.Product;
import vn.edu.hcmuaf.demo.CDWeb.entity.ProductCategory;
import vn.edu.hcmuaf.demo.CDWeb.repository.ProductCategoryRepository;
import vn.edu.hcmuaf.demo.CDWeb.repository.ProductRepository;
import vn.edu.hcmuaf.demo.CDWeb.request.AddProductRequest;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private static ProductRepository productRepository;

    @Autowired
    ProductCategoryRepository productCategoryRepository;

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

    public List<Product> getProductByStatus(String status) {
        return productRepository.findByProductStatus(status);
    }

    public List<Product> getProductsByDiscount(int discount) {
        return productRepository.findByProductDiscount(discount);
    }


    public List<Product> searchProducts(String keyword) {
        List<Product> products = productRepository.searchProducts(keyword);
        return products;
    }

    public Page<Product> getProductByPage(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.findAllProducts(pageable);
    }

    public Product getProductById(long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        return productOptional.orElse(null);
    }

    public Product addProduct(AddProductRequest product) {
        Product product1 = new Product();
        BeanUtils.copyProperties(product, product1);
        ProductCategory productCategory = productCategoryRepository.findById(product.getCategory()).orElse(null);
        product1.setCategory(productCategory);
        return productRepository.save(product1);
    }

    public void deleteProduct(Long productId) {
        Optional<Product> product = productRepository.findById(productId);
        if (product.isPresent()) {
            productRepository.deleteById(productId);
        } else {
            throw new RuntimeException("Product not found with id: " + productId);
        }
    }

    @Transactional
    public void deleteProductByName(String name) {
        Product product = productRepository.findByName(name);
        if (product != null) {
            productRepository.deleteByName(name);
        } else {
            throw new RuntimeException("Product not found with name: " + name);
        }
    }

    public ResponseEntity<?> updateProduct(Long productId, AddProductRequest newProductData) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        if (optionalProduct.isPresent()) {
            Product existingProduct = optionalProduct.get();
            existingProduct.setName(newProductData.getName());
            existingProduct.setDescription(newProductData.getDescription());
            existingProduct.setPrice(newProductData.getPrice());
            existingProduct.setDiscount(newProductData.getDiscount());
            if (newProductData.getImageUrl() != null) {
                existingProduct.setImageUrl(newProductData.getImageUrl());
            }
            existingProduct.setCategory(productCategoryRepository.findById(newProductData.getCategory()).orElse(null));
            return ResponseEntity.ok(productRepository.save(existingProduct));
        } else {
            throw new RuntimeException("Product not found with id: " + productId);
        }
    }

}