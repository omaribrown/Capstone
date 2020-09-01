package com.example.acspringappp.service;

import com.example.acspringappp.models.Bottoms;
import com.example.acspringappp.repositories.BottomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class BottomsServiceImpl implements BottomsService {
    @Autowired
    private BottomsRepository bottomsRepository;

    @Override
    public Iterable<Bottoms> listBottoms() {
        return bottomsRepository.findAll();
    }

    @Override
    public Bottoms createBottom(Bottoms bottom) {
        return bottomsRepository.save(bottom);
    }

    @Override
    public Bottoms seeBottoms(String itemName) {
        return bottomsRepository.seeBottoms(itemName);
    }

    @Override
    public HttpStatus deleteBottom(Long itemId) {
        bottomsRepository.deleteById(itemId);
        return HttpStatus.OK;
    }
}