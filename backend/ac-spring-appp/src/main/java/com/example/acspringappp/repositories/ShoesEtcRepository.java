package com.example.acspringappp.repositories;

import com.example.acspringappp.models.ShoesEtc;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ShoesEtcRepository extends CrudRepository<ShoesEtc, Long> {
    @Query("FROM shoes_etc s WHERE s.itemName = ?1")
    public ShoesEtc seeShoesEtc(String itemName);
}
