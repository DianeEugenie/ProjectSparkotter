package com.example.codeclan.sparkotter_backend.controllers;


import com.example.codeclan.sparkotter_backend.models.AdjectiveWord;
import com.example.codeclan.sparkotter_backend.repositories.AdjectiveRepository.AdjectiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/adjectiveWords")
public class AdjectiveController {

    @Autowired
    AdjectiveRepository adjectiveRepository;

    @GetMapping(value="/word/random")
    public AdjectiveWord getRandomAdjective(){
        return adjectiveRepository.getRandomAdjective();
    }

}
