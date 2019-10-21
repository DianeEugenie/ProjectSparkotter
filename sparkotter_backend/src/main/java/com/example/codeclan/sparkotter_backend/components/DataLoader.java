package com.example.codeclan.sparkotter_backend.components;


import com.example.codeclan.sparkotter_backend.Adjective;
import com.example.codeclan.sparkotter_backend.Noun;
import com.example.codeclan.sparkotter_backend.models.AdjectiveWord;
import com.example.codeclan.sparkotter_backend.models.CreativeInstance;
import com.example.codeclan.sparkotter_backend.models.NounWord;
import com.example.codeclan.sparkotter_backend.models.Prompt;
import com.example.codeclan.sparkotter_backend.repositories.AdjectiveRepository.AdjectiveRepository;
import com.example.codeclan.sparkotter_backend.repositories.InstanceRepository.InstanceRepository;
import com.example.codeclan.sparkotter_backend.repositories.NounRepository.NounRepository;
import com.example.codeclan.sparkotter_backend.repositories.PromptRepository.PromptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AdjectiveRepository adjectiveRepository;

    @Autowired
    NounRepository nounRepository;

    @Autowired
    PromptRepository promptRepository;

    @Autowired
    InstanceRepository instanceRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        for (Adjective adjective : Adjective.getValues()){
            AdjectiveWord newWord = new AdjectiveWord(adjective);
            adjectiveRepository.save(newWord);
        }

        for (Noun noun : Noun.getValues()){
            NounWord newNoun = new NounWord(noun);
            nounRepository.save(newNoun);
        }

        //tests

        Prompt prompt1 = new Prompt("Happy Otter", false);
        promptRepository.save(prompt1);
        Prompt prompt2 = new Prompt("Happy Salami", false);
        promptRepository.save(prompt2);
        Prompt prompt3 = new Prompt("Green Otter", true);
        promptRepository.save(prompt3);

        CreativeInstance creativeInstance1 = new CreativeInstance(prompt1, 10);
        instanceRepository.save(creativeInstance1);

        CreativeInstance creativeInstance2 = new CreativeInstance(prompt1, 20);
        instanceRepository.save(creativeInstance2);
    }
}
