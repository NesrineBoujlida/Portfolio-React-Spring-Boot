package com.example.postgresql.controller;

import com.example.postgresql.entities.Motivation;
import com.example.postgresql.services.MotivationService;
import com.example.postgresql.services.MotivationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController

public class MotivationController {

    private MotivationServiceImpl motivationServiceImpl;

    @Autowired
    public void setMotivationService(MotivationServiceImpl motivationServiceImpl) {
        this.motivationServiceImpl = motivationServiceImpl;
    }




    @RequestMapping(value = "/motivations", method = RequestMethod.GET)
    public List<Motivation> getMotivation(){
        return motivationServiceImpl.getAllMotivations();
    }

}
