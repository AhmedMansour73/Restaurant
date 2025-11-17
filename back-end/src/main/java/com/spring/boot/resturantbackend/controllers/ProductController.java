package com.spring.boot.resturantbackend.controllers;

import com.spring.boot.resturantbackend.controllers.vm.ProductResponseVm;
import com.spring.boot.resturantbackend.dto.ExceptionDto;
import com.spring.boot.resturantbackend.services.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.transaction.SystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/all-products")
    public ResponseEntity<ProductResponseVm> getAllProducts(@RequestParam int page, @RequestParam int size)
            throws SystemException {
        return ResponseEntity.ok(productService.getAllProducts(page, size));
    }


    @GetMapping("/all-ProductsByCategoryId/{id}")
    public ResponseEntity<ProductResponseVm> getAllProductsByCategoryId(@PathVariable Long id, @RequestParam int page, @RequestParam int size)
            throws SystemException {
        return ResponseEntity.ok(productService.getAllProductsByCategoryId(id, page, size));
    }


    @GetMapping("/search-all-products-by-key")
    public ResponseEntity<ProductResponseVm> getAllProductsByKey(@RequestParam String key, @RequestParam int page, @RequestParam int size)
            throws SystemException {
        return ResponseEntity.ok(productService.getAllProductsByKey(key, page, size));
    }

    
    @GetMapping("/all-products-by-key-and-category-id")
    public ResponseEntity<ProductResponseVm> getAllProductsByKeyAndCategoryId(
            @RequestParam Long categoryId,
            @RequestParam String key,
            @RequestParam int page,
            @RequestParam int size
    )
            throws SystemException {
        return ResponseEntity.ok(productService.getAllProductsByCategoryIdAndKey(categoryId, key, page, size));
    }
}
