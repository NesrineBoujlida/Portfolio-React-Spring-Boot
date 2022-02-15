package com.example.postgresql.services;


import com.example.postgresql.entities.Experience;
import com.example.postgresql.entities.Motivation;
import com.example.postgresql.repository.ExperienceRepository;
import com.example.postgresql.repository.MotivationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ExperienceServiceImpl implements ExperienceService {

    private ExperienceRepository experienceRepository;


    @Autowired
    public void setExperienceRepository(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }


    @Override
    public List<Experience> getAllExperiences() {
        List<Experience> ls=experienceRepository.findAll();
        return ls;
    }
}

