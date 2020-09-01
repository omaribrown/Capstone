package com.example.acspringappp.repositories;

import com.example.acspringappp.models.Bottoms;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BottomsRepository extends CrudRepository<Bottoms, Long> {
    @Query("FROM Bottoms b WHERE b.itemName = ?1")
    public Bottoms seeBottoms(String itemName);
}
