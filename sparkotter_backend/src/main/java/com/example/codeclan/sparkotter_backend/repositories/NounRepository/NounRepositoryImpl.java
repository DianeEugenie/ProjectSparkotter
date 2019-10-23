package com.example.codeclan.sparkotter_backend.repositories.NounRepository;

import com.example.codeclan.sparkotter_backend.models.AdjectiveWord;
import com.example.codeclan.sparkotter_backend.models.NounWord;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.swing.text.html.parser.Entity;
import java.util.Random;

public class NounRepositoryImpl implements NounRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    @Transactional
    public NounWord getRandomNoun() {
        NounWord result = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(NounWord.class);
            //set cr to return the count of the number of objects
            cr.setProjection(Projections.rowCount());
            //turn cr into an integer - can not be only cast by (Integer) - why?
            int count = ((Number) cr.uniqueResult()).intValue();
            if (0 != count) {
                // make a random number in the length of the list
                int index = new Random().nextInt(count);
                //important: reset cr to be the whole class of objects
                cr = session.createCriteria(NounWord.class);
                //set the first result to be a random index, and just return one, and get that one
                // (and cast it back from Object to AdjectiveWord.
                result = (NounWord) cr.setFirstResult(index).setMaxResults(1).uniqueResult();
            }
        } catch (HibernateException e) {
            e.printStackTrace();
        }

        return result;
    }
}
