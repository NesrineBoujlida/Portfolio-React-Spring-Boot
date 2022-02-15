package com.example.postgresql.services;
import com.example.postgresql.entities.Motivation;
import com.example.postgresql.repository.MotivationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MotivationServiceImpl implements MotivationService {

    private  MotivationRepository motivationRepository;

    @Autowired
    public void setMotivationRepository(MotivationRepository motivationRepository) {
        this.motivationRepository = motivationRepository;
    }

    @Override

    public List<Motivation> getAllMotivations() {
        List<Motivation> ls=motivationRepository.findAll();
        return ls;
    }
}
