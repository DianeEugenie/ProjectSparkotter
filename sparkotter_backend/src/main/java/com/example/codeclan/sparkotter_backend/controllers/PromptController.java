package com.example.codeclan.sparkotter_backend.controllers;

import com.example.codeclan.sparkotter_backend.repositories.PromptRepository.PromptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/prompts")
public class PromptController {

    @Autowired
    PromptRepository promptRepository;
}
