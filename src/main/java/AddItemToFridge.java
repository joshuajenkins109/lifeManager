import org.json.JSONArray;
import org.json.JSONObject;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;

public class AddItemToFridge extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Enumeration paramNames = request.getParameterNames();
        FridgeItem item = new FridgeItem();
        int shelfLife = 0;
        while(paramNames.hasMoreElements()){
            String paramName = (String)paramNames.nextElement();
            if(paramName.compareTo("name") == 0){
                String[] paramValues = request.getParameterValues(paramName);
                item.setName(paramValues[0]);
            }
            else if(paramName.compareTo("expireDate") == 0){
                String[] paramValues = request.getParameterValues(paramName);
                try {
                    Date date = new SimpleDateFormat("yyyy-MM-dd").parse(paramValues[0]);
                    item.setExpireDate(date);
                }catch(Exception e)
                {
                    System.out.println(e);
                }
            }
            else if(paramName.compareTo("shelfLife") == 0){
                String[] paramValues = request.getParameterValues(paramName);
                if(paramValues[0].length() > 0) {
                    shelfLife = Integer.parseInt(paramValues[0]);
                }else{
                   //do nothing
                }
            }
            else if(paramName.compareTo("shelfLifeHelper") == 0){
                if(shelfLife > 0) {
                    String[] paramValues = request.getParameterValues(paramName);
                    if (paramValues[0].compareTo("Day(s)") == 0) {
                        item.setShelfLife(shelfLife);
                    } else if (paramValues[0].compareTo("Week(s)") == 0) {
                        item.setShelfLife(shelfLife * 7);
                    } else if (paramValues[0].compareTo("Month(s)") == 0) {
                        item.setShelfLife(shelfLife * 30);
                    }
                }
            }
            else if(paramName.compareTo("opened") == 0){
                String[] paramValues = request.getParameterValues(paramName);
                item.setOpened(Boolean.parseBoolean(paramValues[0]));
            }
            else if(paramName.compareTo("inFridge") == 0){
                String[] paramValues = request.getParameterValues(paramName);
                item.setInFridge(Boolean.parseBoolean(paramValues[0]));
            }
        }


        FridgeItemHelper h = new FridgeItemHelper();
        item = h.updateExpireDate(item);
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("org.hibernate.tutorial.jpa");
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        entityManager.persist(item);
        entityManager.getTransaction().commit();

        response.setContentType("application/json");

        PrintWriter out = response.getWriter();
        JSONObject jitem = new JSONObject(item);
        out.println(jitem);
        entityManagerFactory.close();
    }
}
