package com.example.postgresql.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Motivation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;



    private String description;

    public Motivation() {
    }

    public Motivation(Long id, String description) {
        this.id = id;

        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }





    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
