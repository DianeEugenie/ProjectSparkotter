package com.example.codeclan.sparkotter_backend.projections;

import com.example.codeclan.sparkotter_backend.models.CreativeInstance;
import com.example.codeclan.sparkotter_backend.models.Prompt;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedPrompt", types = Prompt.class)
public interface EmbedPrompt {
    public Long getId();
    public String getPrompt();
    public boolean isCustomPrompt();
}
