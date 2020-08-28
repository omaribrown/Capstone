package com.example.acspringappp.service;

import com.example.acspringappp.models.Tops;
import com.example.acspringappp.repositories.TopsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class TopsServiceImpl implements TopsService{
    @Autowired
    private TopsRepository topsRepository;

    @Override
    public Iterable<Tops> listTops() {
        return topsRepository.findAll();
    }

    @Override
    public Tops createTop(Tops tops) {
        return topsRepository.save(tops);
    }

    @Override
    public Tops seeTops(String itemName) {
        return topsRepository.seeTops(itemName);
    }

    @Override
    public HttpStatus deleteTop(Long itemId) {
        topsRepository.deleteById(itemId);
        return HttpStatus.OK;
    }
}
