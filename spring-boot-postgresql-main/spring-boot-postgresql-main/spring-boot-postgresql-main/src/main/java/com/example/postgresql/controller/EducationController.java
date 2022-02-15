package com.example.postgresql.controller;

import com.example.postgresql.entities.Education;
import com.example.postgresql.entities.Experience;
import com.example.postgresql.services.EducationService;
import com.example.postgresql.services.EducationServiceImpl;
import com.example.postgresql.services.ExperienceServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class EducationController {


    private EducationServiceImpl educationServiceImpl;


    @Autowired
    public void setEducationService(EducationService educationServiceImpl) {
        this.educationServiceImpl = (EducationServiceImpl) educationServiceImpl;
    }


    @GetMapping("/educations")
    public List<Education> geteducations(){
        return educationServiceImpl.getAllEducations();
    }

}
