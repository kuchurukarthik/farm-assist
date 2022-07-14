package com.kkr.farmassist.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import com.kkr.farmassist.utilities.Quote;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;

@Entity
@Table(name = "yield")
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
public class Yield implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productid;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "posted_price")
    private long postedPrice;
    private long quantity;
    private long seller;
    private boolean available;
    private long buyer;
    @Column(name = "quotes")
    @Type(type = "jsonb")
    private List<Quote> quotes;

    public Yield() {
    }

    public Yield(long productid, String productName, int quantity, long seller, long postedPrice, boolean available,
            long buyer, List<Quote> quotes) {
        this.productid = productid;
        this.productName = productName;
        this.quantity = quantity;
        this.seller = seller;
        this.postedPrice = postedPrice;
        this.available = available;
        this.buyer = buyer;
        this.quotes = quotes;
    }

    public long getProductid() {
        return productid;
    }

    public void setProductid(long productid) {
        this.productid = productid;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public long getSeller() {
        return seller;
    }

    public void setSeller(long seller) {
        this.seller = seller;
    }

    public float getPostedPrice() {
        return postedPrice;
    }

    public void setPostedPrice(long postedPrice) {
        this.postedPrice = postedPrice;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public long getBuyer() {
        return buyer;
    }

    public void setBuyer(long buyer) {
        this.buyer = buyer;
    }

    public List<Quote> getQuotes() {
        return quotes;
    }

    public void setQuotes(List<Quote> quote) {
        this.quotes = quote;
    }

}
