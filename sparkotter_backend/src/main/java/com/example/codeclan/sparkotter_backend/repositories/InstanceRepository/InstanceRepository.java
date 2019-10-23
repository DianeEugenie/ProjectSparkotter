package com.example.codeclan.sparkotter_backend.repositories.InstanceRepository;

import com.example.codeclan.sparkotter_backend.models.CreativeInstance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface InstanceRepository extends JpaRepository<CreativeInstance, Long>, InstanceRepositoryCustom {
    List<CreativeInstance> findAllByOrderByIdDesc();

}
