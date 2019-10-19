package com.example.codeclan.sparkotter_backend.models;

import com.example.codeclan.sparkotter_backend.Noun;

import javax.persistence.*;

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

    public NounWord(Noun noun) {
        this.noun = noun;
        this.nounCap = noun.getName();
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
}
