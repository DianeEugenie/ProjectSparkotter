package com.example.codeclan.sparkotter_backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="creative_instances")
public class CreativeInstance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private Date dateCreated;

    @Column(name = "prompt_time")
    private double prompt_time;

    @JsonIgnoreProperties("instance")
    @ManyToOne
    @JoinColumn(name="prompt_id", nullable = false)
    private Prompt prompt;

    public CreativeInstance(Prompt prompt, double prompt_time) {
        this.prompt = prompt;
        this.prompt_time = prompt_time;
        //will have uploaded image/text here too
        this.dateCreated = new Date();
    }

    public CreativeInstance() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Prompt getPrompt() {
        return prompt;
    }

    public void setPrompt(Prompt prompt) {
        this.prompt = prompt;
    }

    public double getPrompt_time() {
        return prompt_time;
    }

    public void setPrompt_time(double prompt_time) {
        this.prompt_time = prompt_time;
    }
}
