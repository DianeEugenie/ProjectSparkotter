package com.example.codeclan.sparkotter_backend.models;


import javax.persistence.*;

@Entity
@Table(name = "prompt")
public class Prompt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "prompt")
    private String prompt;

    public Prompt(String prompt) {
        this.prompt = prompt;
    }

    public Prompt() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPrompt() {
        return prompt;
    }

    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }
}
