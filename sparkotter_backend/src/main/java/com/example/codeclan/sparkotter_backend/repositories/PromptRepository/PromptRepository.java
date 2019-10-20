package com.example.codeclan.sparkotter_backend.repositories.PromptRepository;

import com.example.codeclan.sparkotter_backend.models.Prompt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PromptRepository extends JpaRepository<Prompt, Long> {

}
