package com.example.codeclan.sparkotter_backend.repositories.NounRepository;

import com.example.codeclan.sparkotter_backend.models.NounWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface NounRepository extends JpaRepository<NounWord, Long>, NounRepositoryCustom {
}
