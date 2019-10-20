package com.example.codeclan.sparkotter_backend.repositories.AdjectiveRepository;

import com.example.codeclan.sparkotter_backend.Adjective;
import com.example.codeclan.sparkotter_backend.models.AdjectiveWord;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.Random;

public class AdjectiveRepositoryImpl implements AdjectiveRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Override
    @Transactional
    public AdjectiveWord getRandomAdjective() {
        AdjectiveWord result = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(AdjectiveWord.class);
            //set cr to return the count of the number of objects
            cr.setProjection(Projections.rowCount());
            //turn result into an integer - can not be only cast by (Integer) - why?
            int count = ((Number) cr.uniqueResult()).intValue();
            if (0 != count) {
                // make a random number in the length of the list
                int index = new Random().nextInt(count);
                //important: reset cr to be the whole class of objects
                cr = session.createCriteria(AdjectiveWord.class);
                //set the first result to be a random index, and just return one, and get that one
                // (and cast it back from Object to AdjectiveWord.
                result = (AdjectiveWord) cr.setFirstResult(index).setMaxResults(1).uniqueResult();
            }
        } catch (HibernateException e) {
            e.printStackTrace();
        }

        return result;
    }
}
