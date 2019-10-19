package com.example.codeclan.sparkotter_backend.components;


import com.example.codeclan.sparkotter_backend.Adjective;
import com.example.codeclan.sparkotter_backend.Noun;
import com.example.codeclan.sparkotter_backend.models.AdjectiveWord;
import com.example.codeclan.sparkotter_backend.models.NounWord;
import com.example.codeclan.sparkotter_backend.models.Prompt;
import com.example.codeclan.sparkotter_backend.repositories.AdjectiveRepository.AdjectiveRepository;
import com.example.codeclan.sparkotter_backend.repositories.NounRepository.NounRepository;
import com.example.codeclan.sparkotter_backend.repositories.PromptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PromptRepository promptRepository;

    @Autowired
    AdjectiveRepository adjectiveRepository;

    @Autowired
    NounRepository nounRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Prompt prompt = new Prompt();
        promptRepository.save(prompt);
        Prompt prompt2 = new Prompt();
        promptRepository.save(prompt2);

        for (Adjective adjective : Adjective.getValues()){
            AdjectiveWord newWord = new AdjectiveWord(adjective);
            adjectiveRepository.save(newWord);
        }

        for (Noun noun : Noun.getValues()){
            NounWord newNoun = new NounWord(noun);
            nounRepository.save(newNoun);
        }
    }
}
