package com.kkr.farmassist.utilities;

import java.io.Serializable;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Quote implements Serializable{

    private long productId;
    private long sellerId;
    private long retailerId;
    private long price;
    
}
