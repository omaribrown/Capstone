package com.example.acspringappp.service;


import com.example.acspringappp.models.ShoesEtc;
import com.example.acspringappp.repositories.ShoesEtcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ShoesEtcServiceImpl implements ShoesEtcService {
    @Autowired
    private ShoesEtcRepository shoesEtcRepository;

    @Override
    public Iterable<ShoesEtc> listShoesEtc() {
        return shoesEtcRepository.findAll();
    }

    @Override
    public ShoesEtc createShoesEtc(ShoesEtc shoesEtc) {
        return shoesEtcRepository.save(shoesEtc);
    }

    @Override
    public ShoesEtc seeShoesEtc(String itemName) {
        return shoesEtcRepository.seeShoesEtc(itemName);
    }

    @Override
    public HttpStatus deleteShoesEtc(Long itemId) {
        shoesEtcRepository.deleteById(itemId);
        return HttpStatus.OK;
    }
}
