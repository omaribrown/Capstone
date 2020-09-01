package com.example.acspringappp.controller;

import com.example.acspringappp.models.ShoesEtc;
import com.example.acspringappp.service.ShoesEtcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/shoesetc")
public class ShoesEtcController {
    @Autowired
    ShoesEtcService shoesEtcService;

    @GetMapping
    public Iterable<ShoesEtc> findAll() {
        return shoesEtcService.listShoesEtc();
    }

    @PostMapping
    public ShoesEtc createShoesEtc(@RequestBody ShoesEtc shoesEtcParam) {
        return shoesEtcService.createShoesEtc(shoesEtcParam);
    }

    @DeleteMapping("/{itemId}")
    public HttpStatus deleteShoesEtc(@PathVariable Long itemId) {
        return shoesEtcService.deleteShoesEtc(itemId);
    }

}
