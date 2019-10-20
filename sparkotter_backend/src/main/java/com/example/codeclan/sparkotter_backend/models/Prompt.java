package com.example.codeclan.sparkotter_backend.models;


import com.example.codeclan.sparkotter_backend.Adjective;
import com.example.codeclan.sparkotter_backend.Noun;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "prompt")
public class Prompt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("prompts")
    @ManyToOne
    @JoinColumn(name="adjective_id", nullable = false)
    private AdjectiveWord prompt_adjective;

    @JsonIgnoreProperties("prompts")
    @ManyToOne
    @JoinColumn(name="noun_id", nullable = false)
    private NounWord prompt_noun;

    @JsonIgnoreProperties("prompt")
    @OneToMany(mappedBy = "prompt")
    @Column (name = "instances")
    private List<Instance> instances;

    public Prompt(AdjectiveWord prompt_adjective, NounWord prompt_noun) {
        this.prompt_adjective = prompt_adjective;
        this.prompt_noun = prompt_noun;
        this.instances = new ArrayList<>();
    }

    public Prompt() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AdjectiveWord getPrompt_adjective() {
        return prompt_adjective;
    }

    public void setPrompt_adjective(AdjectiveWord prompt_adjective) {
        this.prompt_adjective = prompt_adjective;
    }

    public NounWord getPrompt_noun() {
        return prompt_noun;
    }

    public void setPrompt_noun(NounWord prompt_noun) {
        this.prompt_noun = prompt_noun;
    }

    public List<Instance> getInstances() {
        return instances;
    }

    public void setInstances(List<Instance> instances) {
        this.instances = instances;
    }
}
