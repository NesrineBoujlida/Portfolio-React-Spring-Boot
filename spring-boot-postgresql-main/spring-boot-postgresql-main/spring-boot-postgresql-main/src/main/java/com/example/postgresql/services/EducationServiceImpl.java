package com.example.postgresql.services;


import com.example.postgresql.entities.Education;

import com.example.postgresql.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationServiceImpl implements EducationService {


        private EducationRepository educationRepository;


        @Autowired
        public void setEducationRepository(EducationRepository educationRepository) {
            this.educationRepository = educationRepository;
        }

        @Override
    public List<Education> getAllEducations() {
        List<Education> myls =educationRepository.findAll();
        return myls;
    }
}

