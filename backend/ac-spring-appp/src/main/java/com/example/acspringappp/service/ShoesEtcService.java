package com.example.acspringappp.service;

import com.example.acspringappp.models.ShoesEtc;
import org.springframework.http.HttpStatus;

public interface ShoesEtcService {
    public Iterable<ShoesEtc> listShoesEtc();
    public ShoesEtc createShoesEtc(ShoesEtc shoesEtc);
    public ShoesEtc seeShoesEtc(String itemName);
    public HttpStatus deleteShoesEtc(Long itemId);

}
