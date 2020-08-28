package com.example.acspringappp.repositories;

import com.example.acspringappp.models.Tops;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TopsRepository extends CrudRepository<Tops, Long> {
    @Query("FROM Tops t WHERE t.itemName = ?1")
    public Tops seeTops(String itemName);
}
