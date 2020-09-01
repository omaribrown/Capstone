package com.example.acspringappp.controller;


import com.example.acspringappp.models.Tops;
import com.example.acspringappp.service.TopsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/tops")
public class TopsController {
    @Autowired
    TopsService topsService;

    @GetMapping
    public Iterable<Tops> findAll() {
        return topsService.listTops();
    }

    @PostMapping
    public Tops createTop(@RequestBody Tops topsParam) {
        return topsService.createTop(topsParam);
    }

    @DeleteMapping("/{itemId}")
    public HttpStatus deleteTop(@PathVariable Long itemId) {
        return topsService.deleteTop(itemId);
    }
}
