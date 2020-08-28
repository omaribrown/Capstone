package com.example.acspringappp.models;


import javax.persistence.*;

@Entity
@Table(name = "tops")
public class Tops {

    @Id
    @Column
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column
    private String itemName;

    @Column
    private String 

}
