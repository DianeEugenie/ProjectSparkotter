package com.example.codeclan.sparkotter_backend.models;


import com.example.codeclan.sparkotter_backend.Adjective;
import com.example.codeclan.sparkotter_backend.Noun;

import javax.persistence.*;

@Entity
@Table(name = "prompt")
public class Prompt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "phrase")
    private String phrase;

    public Prompt() {
        String adjective = Adjective.getRandom();
        String noun = Noun.getRandom();
        this.phrase = adjective + " " + noun;
    }

    public String getPhrase() {
        return phrase;
    }

    public void setPhrase(String phrase) {
        this.phrase = phrase;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
