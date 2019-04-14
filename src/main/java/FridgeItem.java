import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

import java.util.Date;

@Entity
@Table(name = "fridgeinventory")
public class FridgeItem {


    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "incrementor")
    @GenericGenerator(name = "incrementor", strategy = "increment")
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "name")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "inDate")
    private Date inDate;

    public Date getInDate() {
        return inDate;
    }

    @PrePersist
    protected void onCreate() {
        inDate = new Date();
    }


    @Column(name = "expireDate")
    private Date expireDate;

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }

    @Column(name = "shelfLife")
    private Integer shelfLife;

    public Integer getShelfLife() {
        return shelfLife;
    }

    public void setShelfLife(Integer shelfLife) {
        this.shelfLife = shelfLife;
    }

    @Column(name = "inFridge")
    private Boolean inFridge;

    public Boolean getInFridge() {
        return inFridge;
    }

    public void setInFridge(Boolean inFridge) {
        this.inFridge = inFridge;
    }

    @Column(name = "opened")
    private Boolean opened;

    public Boolean getOpened() {
        return opened;
    }

    public void setOpened(Boolean opened) {
        this.opened = opened;
    }
}