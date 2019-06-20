

import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.http.HttpServlet;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.*;
import java.text.SimpleDateFormat;


public class GETFridgeInventory extends HttpServlet {


    public void init() throws ServletException {
       //init..
    }

   public void doGet(HttpServletRequest request, HttpServletResponse response)
       throws ServletException, IOException{
       EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("org.hibernate.tutorial.jpa");

       EntityManager entityManager = entityManagerFactory.createEntityManager();
       entityManager.getTransaction().begin();
       List<FridgeItem> items = entityManager.createQuery("Select a  FROM FridgeItem a", FridgeItem.class).getResultList();
       entityManager.getTransaction().commit();
       entityManagerFactory.close();
       response.setContentType("application/json");
       JSONArray jsonarry = new JSONArray(items);
       PrintWriter out = response.getWriter();
       out.println(jsonarry);
   }


   public void destroy(){
        //destroy
   }


}

