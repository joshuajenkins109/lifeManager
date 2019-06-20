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
import java.util.Calendar;
import java.util.Date;
import java.util.Enumeration;
import java.util.List;

public class OpenItem extends HttpServlet {

    public void init() throws ServletException {

    }
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        String[] paramValues = {"0"};
        Enumeration paramNames = request.getParameterNames();
        while(paramNames.hasMoreElements()) {
            String paramName = (String) paramNames.nextElement();
            paramValues = request.getParameterValues(paramName);

        }
        FridgeItemHelper h = new FridgeItemHelper();
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("org.hibernate.tutorial.jpa");

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();


        FridgeItem item = entityManager.find(FridgeItem.class, Integer.parseInt(paramValues[0]));
        item.setOpened(true);
        item = h.updateExpireDate(item);
        entityManager.getTransaction().commit();

        response.setContentType("application/json");

        System.out.println(item.getInDate());
        PrintWriter out = response.getWriter();
        JSONObject jitem = new JSONObject(item);
        out.println(jitem);

        entityManagerFactory.close();


    }

}
