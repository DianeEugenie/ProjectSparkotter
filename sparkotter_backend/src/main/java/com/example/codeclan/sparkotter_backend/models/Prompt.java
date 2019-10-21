package com.example.codeclan.sparkotter_backend.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "prompts")
public class Prompt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "prompt")
    private String prompt;

    @JsonIgnoreProperties("prompt")
    @OneToMany(mappedBy = "prompt")
    @Column (name = "creativeInstances")
    private List<CreativeInstance> creativeInstances;

    public Prompt(String prompt) {
        this.prompt = prompt;
        this.creativeInstances = new ArrayList<>();
    }

    public Prompt() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrompt() {
        return prompt;
    }

    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }

    public List<CreativeInstance> getCreativeInstances() {
        return creativeInstances;
    }

    public void setCreativeInstances(List<CreativeInstance> creativeInstances) {
        this.creativeInstances = creativeInstances;
    }
}
