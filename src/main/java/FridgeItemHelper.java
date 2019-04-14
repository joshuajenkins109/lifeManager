import java.util.Calendar;
import java.util.Date;

public class FridgeItemHelper {

    public FridgeItemHelper(){
    }
    public FridgeItem updateExpireDate(FridgeItem item){
        if(item.getExpireDate() == null) {
            Date currentDate = new Date();
            Calendar c = Calendar.getInstance();
            c.add(Calendar.DATE, item.getShelfLife());
            Date calculatedDate = c.getTime();
            item.setExpireDate(calculatedDate);
        }
        else{
            Date currentDate = new Date();
            Calendar c = Calendar.getInstance();
            c.add(Calendar.DATE, item.getShelfLife());
            Date calculatedDate = c.getTime();
            if(calculatedDate.compareTo(item.getExpireDate())< 0){
                item.setExpireDate(calculatedDate);
            }
        }
        return item;
    }
}
