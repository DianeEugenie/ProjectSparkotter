package com.example.codeclan.sparkotter_backend.repositories.AdjectiveRepository;

import com.example.codeclan.sparkotter_backend.models.AdjectiveWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AdjectiveRepository extends JpaRepository<AdjectiveWord, Long> {

}
