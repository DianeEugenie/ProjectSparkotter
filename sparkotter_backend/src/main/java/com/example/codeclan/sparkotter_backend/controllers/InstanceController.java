package com.example.codeclan.sparkotter_backend.controllers;

import com.example.codeclan.sparkotter_backend.models.CreativeInstance;
import com.example.codeclan.sparkotter_backend.repositories.InstanceRepository.InstanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/creativeInstances")
public class InstanceController {

    @Autowired
    InstanceRepository instanceRepository;

    @GetMapping(value="/all/descending")
    public List<CreativeInstance> getAllDescending(){
        return instanceRepository.findAllByOrderByIdDesc();
    }
}
