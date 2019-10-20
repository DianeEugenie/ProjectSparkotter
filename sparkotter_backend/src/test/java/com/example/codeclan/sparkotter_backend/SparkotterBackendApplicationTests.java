package com.example.codeclan.sparkotter_backend;


import com.example.codeclan.sparkotter_backend.models.AdjectiveWord;
import com.example.codeclan.sparkotter_backend.models.CreativeInstance;
import com.example.codeclan.sparkotter_backend.models.NounWord;
import com.example.codeclan.sparkotter_backend.models.Prompt;
import com.example.codeclan.sparkotter_backend.repositories.AdjectiveRepository.AdjectiveRepository;
import com.example.codeclan.sparkotter_backend.repositories.InstanceRepository.InstanceRepository;
import com.example.codeclan.sparkotter_backend.repositories.NounRepository.NounRepository;
import com.example.codeclan.sparkotter_backend.repositories.PromptRepository.PromptRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SparkotterBackendApplicationTests {

	@Autowired
	AdjectiveRepository adjectiveRepository;

	@Autowired
	NounRepository nounRepository;

	@Autowired
	PromptRepository promptRepository;

	@Autowired
	InstanceRepository instanceRepository;

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
		CreativeInstance creativeInstance1 = new CreativeInstance(prompt, 10);
		assertNotNull(creativeInstance1);
		assertEquals(prompt, creativeInstance1.getPrompt());
//		try {
//			Thread.sleep(60000);
//		} catch (InterruptedException e) {
//			e.printStackTrace();
//		}
		CreativeInstance creativeInstance2 = new CreativeInstance(prompt, 20.20);
		assertNotNull(creativeInstance2);
		assertEquals(prompt, creativeInstance2.getPrompt());
		//wait allows to check if time created is different - passes
//		assertNotEquals(creativeInstance1.getDateCreated(), creativeInstance2.getDateCreated());
	}

	@Test
	void canGetPromptFromRepository() {
		List<Prompt> found = promptRepository.findAll();
		assertEquals(1, found.size());
	}

	@Test
	void canGetInstanceFromRepository() {
		List<CreativeInstance> found = instanceRepository.findAll();
		assertEquals(2, found.size());
		assertEquals(found.get(0).getPrompt().getId(), 1L);
		assertEquals(found.get(0).getPrompt_time(), 10);
		assertEquals(found.get(1).getPrompt().getId(), 1L);
		assertEquals(found.get(1).getPrompt_time(), 20);

	}
}
