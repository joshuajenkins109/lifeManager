

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


public class world extends HttpServlet {


    private String message;

    public void init() throws ServletException {
        message = "Hello World";
    }


   /*public void doGet(HttpServletRequest request, HttpServletResponse response)
       throws ServletException, IOException{
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>" + message + "</h1>");
   }*/

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
   public void doPost(HttpServletRequest request, HttpServletResponse response)
       throws ServletException, IOException{
       System.out.println("WE ARE GETTING TO POST");
       Enumeration  paramNames = request.getParameterNames();
       FridgeItem item = new FridgeItem();
       int shelfLife = 0;
       while(paramNames.hasMoreElements()){
           String paramName = (String)paramNames.nextElement();
           if(paramName.compareTo("name") == 0){
               String[] paramValues = request.getParameterValues(paramName);
               System.out.println("name: "+ paramValues[0]);
               item.setName(paramValues[0]);
           }
           else if(paramName.compareTo("expireDate") == 0){
               String[] paramValues = request.getParameterValues(paramName);
               System.out.println("Expire: "+ paramValues[0]);
               try {
                   Date date = new SimpleDateFormat("yyyy-MM-dd").parse(paramValues[0]);
                   System.out.println(date);
                   item.setExpireDate(date);
               }catch(Exception e)
               {
                   System.out.println(e);
               }
               //item.setExpireDate(paramValues[0]);
               //convert string to date?
           }
           else if(paramName.compareTo("shelfLife") == 0){
               String[] paramValues = request.getParameterValues(paramName);
               System.out.println("shelf life: "+ paramValues[0]);
               if(paramValues[0].length() > 0) {
                   shelfLife = Integer.parseInt(paramValues[0]);
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

       entityManagerFactory.close();
   }

   public void destroy(){
        //do nothing apparently
   }


}

