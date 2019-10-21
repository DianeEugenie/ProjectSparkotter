package com.example.codeclan.sparkotter_backend.models;


import com.example.codeclan.sparkotter_backend.Adjective;

import javax.persistence.*;


@Entity
@Table(name="adjectives")
public class AdjectiveWord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name="adjective")
    private Adjective adjective;

    @Column(name="adjectiveCap")
    private String adjectiveCap;

    public AdjectiveWord(Adjective adjective) {
        this.adjective = adjective;
        this.adjectiveCap = adjective.getName();
    }

    public AdjectiveWord() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Adjective getAdjective() {
        return adjective;
    }

    public void setAdjective(Adjective adjective) {
        this.adjective = adjective;
    }

    public String getAdjectiveCap() {
        return adjectiveCap;
    }

    public void setAdjectiveCap(String adjectiveCap) {
        this.adjectiveCap = adjectiveCap;
    }
}
