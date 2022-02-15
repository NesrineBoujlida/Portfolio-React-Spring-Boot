package com.example.postgresql.services;

import com.example.postgresql.entities.Motivation;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MotivationService {
    List<Motivation> getAllMotivations();
}
