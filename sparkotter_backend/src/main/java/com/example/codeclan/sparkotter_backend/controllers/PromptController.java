package com.example.codeclan.sparkotter_backend.controllers;

import com.example.codeclan.sparkotter_backend.models.Prompt;
import com.example.codeclan.sparkotter_backend.repositories.PromptRepository.PromptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/prompts")
public class PromptController {

    @Autowired
    PromptRepository promptRepository;

    @GetMapping(value="/prompt/last")
    public Prompt getLastPrompt(){
        return promptRepository.findLast();
    }

    @GetMapping(value="/checkPrompt/{promptString}")
    public boolean checksPromptExists(@PathVariable String promptString){
        return promptRepository.existsByPrompt(promptString);
    }




}
