package com.example.codeclan.sparkotter_backend.repositories;

import com.example.codeclan.sparkotter_backend.models.Prompt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PromptRepository extends JpaRepository<Prompt, Long> {
}
