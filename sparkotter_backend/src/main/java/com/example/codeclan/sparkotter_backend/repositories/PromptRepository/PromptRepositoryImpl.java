package com.example.codeclan.sparkotter_backend.repositories.PromptRepository;

import com.example.codeclan.sparkotter_backend.models.Prompt;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

public class PromptRepositoryImpl implements PromptRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    @Transactional
    public Prompt findLast() {
        Prompt result = null;
        Session session = entityManager.unwrap(Session.class);
        Criteria cr = session.createCriteria(Prompt.class);
        cr.setProjection(Projections.rowCount());
        int count = ((Number) cr.uniqueResult()).intValue();
        if (0 != count) {
            int index = count-1;
            cr = session.createCriteria(Prompt.class);
            result = (Prompt) cr.setFirstResult(index).setMaxResults(1).uniqueResult();
        }
        return result;
    }
}
