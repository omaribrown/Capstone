package com.example.acspringappp.service;

import com.example.acspringappp.models.Tops;
import org.springframework.http.HttpStatus;

public interface TopsService {
    public Iterable<Tops> listTops();
    public Tops createTop(Tops tops);
    // instead of logging in, the user should be able to edit
    public Tops seeTops(String itemName);
    public HttpStatus deleteTop(Long itemId);

}
