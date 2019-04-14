import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Main {

    public static void main(String[] args){
        /*EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("org.hibernate.tutorial.jpa");

        FridgeItem item = new FridgeItem();
        item.setName("Bread");
        item.setShelfLife(14);
        item.setInFridge(false);
        item.setOpened(false);
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        //List<FridgeItem> items = entityManager.createQuery("Select a FROM FridgeItem a", FridgeItem.class).getResultList();
        entityManager.persist(item);
        entityManager.getTransaction().commit();

        entityManagerFactory.close();

        /*for(FridgeItem itemm: items){
            System.out.println(itemm.getName() + " in on " + itemm.getInDate().toString());
        }*/

        Set<Character> set = new HashSet<>();
        set.add('d');
        set.add('a');
        set.add('d');
        set.add('b');
        System.out.println(set);
        set.remove('d');
        System.out.println(set);
    }


    /*

            Either add button or on click give options to do things (open/close, remove/add, extend shelf life?,)
            try to fix in date (it currently includes time, lets remove that)
            make table loading centered

            Expire-date :  Still need to set after opening (currently 'opening' isnt possible)
           Add: Accepts Expire and shelf, shelf or expire, but not neither
     */
}
