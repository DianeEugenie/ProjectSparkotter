package com.example.codeclan.sparkotter_backend;


import com.example.codeclan.sparkotter_backend.models.AdjectiveWord;
import com.example.codeclan.sparkotter_backend.models.NounWord;
import com.example.codeclan.sparkotter_backend.models.Prompt;
import com.example.codeclan.sparkotter_backend.repositories.AdjectiveRepository.AdjectiveRepository;
import com.example.codeclan.sparkotter_backend.repositories.NounRepository.NounRepository;
import com.example.codeclan.sparkotter_backend.repositories.PromptRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class SparkotterBackendApplicationTests {

	@Autowired
	PromptRepository promptRepository;

	@Autowired
	AdjectiveRepository adjectiveRepository;

	@Autowired
	NounRepository nounRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canGetAdjective() {
		String word = Adjective.getRandom();
		assertNotNull(word);
	}
	@Test
	void canGetNoun() {
		String word = Noun.getRandom();
		assertNotNull(word);
	}

//	@Test
//	void canGetRandomPrompt() {
//		Prompt prompt = new Prompt();
//		String phrase = prompt.getPhrase();
//		assertNotNull(phrase);
//	}
//
//	@Test
//	void canGetPromptFromRepository() {
//		List<Prompt> found = promptRepository.findAll();
//		assertEquals(2, found.size());
//	}

	@Test
	void canGetAdjectiveFromModel() {
		AdjectiveWord word = new AdjectiveWord(Adjective.ACCURATE);
		assertEquals("Accurate", word.getAdjectiveCap());
	}

	@Test
	void canGetAdjectiveFromRepository() {
		List<AdjectiveWord> found = adjectiveRepository.findAll();
		assertEquals(87, found.size());
	}

	@Test
	void canGetRandomAdjectiveWord(){
		AdjectiveWord found = adjectiveRepository.getRandomAdjective();
		assertNotNull(found);
	}
	@Test
	void canGetRandomNounWord(){
		NounWord found = nounRepository.getRandomNoun();
		assertNotNull(found);
	}
}
