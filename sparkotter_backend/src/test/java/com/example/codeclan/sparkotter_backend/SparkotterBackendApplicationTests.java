package com.example.codeclan.sparkotter_backend;


import com.example.codeclan.sparkotter_backend.models.AdjectiveWord;
import com.example.codeclan.sparkotter_backend.models.Instance;
import com.example.codeclan.sparkotter_backend.models.NounWord;
import com.example.codeclan.sparkotter_backend.models.Prompt;
import com.example.codeclan.sparkotter_backend.repositories.AdjectiveRepository.AdjectiveRepository;
import com.example.codeclan.sparkotter_backend.repositories.NounRepository.NounRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SparkotterBackendApplicationTests {

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

	@Test
	void canCreatePrompt() {
		AdjectiveWord adjective = adjectiveRepository.getRandomAdjective();
		NounWord noun = nounRepository.getRandomNoun();
		Prompt prompt = new Prompt(adjective, noun);
		assertNotNull(prompt);
	}

	@Test
	void canCreateInstance__andAnotherOfSamePrompt() {
		AdjectiveWord adjective = adjectiveRepository.getRandomAdjective();
		NounWord noun = nounRepository.getRandomNoun();
		Prompt prompt = new Prompt(adjective, noun);
		Instance instance1 = new Instance(prompt, 10);
		assertNotNull(instance1);
		assertEquals(prompt, instance1.getPrompt());
		try {
			Thread.sleep(60000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		Instance instance2 = new Instance(prompt, 20.20);
		assertNotNull(instance2);
		assertEquals(prompt, instance2.getPrompt());
		//wait allows to check if time created is different - passes
		assertNotEquals(instance1.getDateCreated(), instance2.getDateCreated());

	}
}
