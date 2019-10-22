package com.example.codeclan.sparkotter_backend.repositories.InstanceRepository;

import com.example.codeclan.sparkotter_backend.models.CreativeInstance;
import com.example.codeclan.sparkotter_backend.projections.EmbedPrompt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface InstanceRepository extends JpaRepository<CreativeInstance, Long> {
}
