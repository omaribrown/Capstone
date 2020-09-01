package com.example.acspringappp.controller;


import com.example.acspringappp.models.Bottoms;
import com.example.acspringappp.service.BottomsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/bottoms")
public class BottomsController {
    @Autowired
    BottomsService bottomsService;

    @GetMapping
    public Iterable<Bottoms> findAll() {
        return bottomsService.listBottoms();
    }

    @PostMapping
    public Bottoms createBottom(@RequestBody Bottoms bottomParam) {
        return bottomsService.createBottom(bottomParam);
    }

    @DeleteMapping("/{itemId}")
    public HttpStatus deleteBottom(@PathVariable Long itemId) {
        return bottomsService.deleteBottom(itemId);
    }


}
