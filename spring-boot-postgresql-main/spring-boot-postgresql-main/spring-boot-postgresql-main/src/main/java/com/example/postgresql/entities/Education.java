package com.example.postgresql.entities;

import jdk.jfr.DataAmount;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
@Data
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nom_etablissement;
    private String periode;
    private String specialité;

    public Education() {
    }

    public Education(Long id, String nom_etablissement, String periode, String specialité) {
        this.id = id;
        this.nom_etablissement = nom_etablissement;
        this.periode = periode;
        this.specialité = specialité;
    }
}
