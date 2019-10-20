package com.example.codeclan.sparkotter_backend.repositories.InstanceRepository;

import com.example.codeclan.sparkotter_backend.models.Instance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstanceRepository extends JpaRepository<Instance, Long> {
}
