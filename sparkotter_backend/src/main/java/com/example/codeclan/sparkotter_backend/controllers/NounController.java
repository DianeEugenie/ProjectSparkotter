package com.example.codeclan.sparkotter_backend.controllers;

import com.example.codeclan.sparkotter_backend.models.NounWord;
import com.example.codeclan.sparkotter_backend.repositories.NounRepository.NounRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/nounWords")
public class NounController {

    @Autowired
    NounRepository nounRepository;

    @GetMapping(value = "/word/random")
    public NounWord getRandomNoun(){
        return nounRepository.getRandomNoun();
    }
}
