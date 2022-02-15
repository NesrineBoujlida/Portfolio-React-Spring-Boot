package com.example.postgresql.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nom;
    private String periode;
    private String description;

    public Experience(Long id, String nom, String periode, String description) {
        this.id = id;
        this.nom = nom;
        this.periode = periode;
        this.description = description;
    }

    public Experience() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPeriode() {
        return periode;
    }

    public void setPeriode(String periode) {
        this.periode = periode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Experience{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", periode='" + periode + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
