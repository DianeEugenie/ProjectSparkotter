package com.example.codeclan.sparkotter_backend;

import com.example.codeclan.sparkotter_backend.models.Prompt;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class SparkotterBackendApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void canGetAdjective() {
		String word = Adjective.getRandom();
		System.out.println(word);
		assertNotNull(word);
	}
	@Test
	void canGetNoun() {
		String word = Noun.getRandom();
		System.out.println(word);
		assertNotNull(word);
	}

	@Test
	void canGetRandomPrompt() {
		Prompt prompt = new Prompt();
		String phrase = prompt.getPhrase();
		System.out.println(phrase);
		assertNotNull(phrase);
	}
}
