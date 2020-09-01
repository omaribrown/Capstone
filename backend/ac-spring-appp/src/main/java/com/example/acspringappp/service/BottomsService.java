package com.example.acspringappp.service;

import com.example.acspringappp.models.Bottoms;
import org.springframework.http.HttpStatus;

public interface BottomsService {
    public Iterable<Bottoms> listBottoms();
    public Bottoms createBottom(Bottoms bottom);
    public Bottoms seeBottoms(String itemName);
    public HttpStatus deleteBottom(Long itemId);
}
