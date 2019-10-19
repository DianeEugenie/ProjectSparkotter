package com.example.codeclan.sparkotter_backend.components;

import com.example.codeclan.sparkotter_backend.models.Prompt;
import com.example.codeclan.sparkotter_backend.repositories.PromptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PromptRepository promptRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Prompt prompt = new Prompt();
        promptRepository.save(prompt);
        Prompt prompt2 = new Prompt();
        promptRepository.save(prompt2);
    }
}
