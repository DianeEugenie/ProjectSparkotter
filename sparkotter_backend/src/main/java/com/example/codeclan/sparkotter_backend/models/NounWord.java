package com.example.codeclan.sparkotter_backend.models;

import com.example.codeclan.sparkotter_backend.Noun;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="nouns")
public class NounWord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name="noun")
    private Noun noun;

    @Column(name="nounCap")
    private String nounCap;

    @JsonIgnoreProperties("prompt_noun")
    @OneToMany(mappedBy = "prompt_noun")
    @Column(name = "prompts")
    private List<Prompt> prompts;

    public NounWord(Noun noun) {
        this.noun = noun;
        this.nounCap = noun.getName();
        this.prompts = new ArrayList<>();
    }

    public NounWord() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Noun getNoun() {
        return noun;
    }

    public void setNoun(Noun noun) {
        this.noun = noun;
    }

    public String getNounCap() {
        return nounCap;
    }

    public void setNounCap(String nounCap) {
        this.nounCap = nounCap;
    }

    public List<Prompt> getPrompts() {
        return prompts;
    }

    public void setPrompts(List<Prompt> prompts) {
        this.prompts = prompts;
    }
}
