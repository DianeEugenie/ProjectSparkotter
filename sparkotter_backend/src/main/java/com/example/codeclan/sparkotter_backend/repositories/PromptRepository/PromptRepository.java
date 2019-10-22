package com.example.codeclan.sparkotter_backend.repositories.PromptRepository;

import com.example.codeclan.sparkotter_backend.models.Prompt;
import com.example.codeclan.sparkotter_backend.projections.EmbedPrompt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPrompt.class)
public interface PromptRepository extends JpaRepository<Prompt, Long>, PromptRepositoryCustom {
}
