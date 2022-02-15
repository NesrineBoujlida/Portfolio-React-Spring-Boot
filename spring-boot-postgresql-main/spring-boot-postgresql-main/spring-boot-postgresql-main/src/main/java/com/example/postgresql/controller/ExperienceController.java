package com.example.postgresql.controller;


import com.example.postgresql.entities.Experience;

import com.example.postgresql.services.ExperienceServiceImpl;
import com.example.postgresql.services.MotivationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ExperienceController {

    private ExperienceServiceImpl experienceServiceImpl;


    @Autowired
    public void setExperienceService(ExperienceServiceImpl experienceServiceImpl) {
        this.experienceServiceImpl = experienceServiceImpl;
    }


    @GetMapping("/experiences")
    public List<Experience> getexperience(){
        return experienceServiceImpl.getAllExperiences();
    }

}
