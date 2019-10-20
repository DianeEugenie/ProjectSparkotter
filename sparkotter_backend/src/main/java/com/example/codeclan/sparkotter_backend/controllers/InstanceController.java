package com.example.codeclan.sparkotter_backend.controllers;

import com.example.codeclan.sparkotter_backend.repositories.InstanceRepository.InstanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/creative_instances")
public class InstanceController {

    @Autowired
    InstanceRepository instanceRepository;
}
