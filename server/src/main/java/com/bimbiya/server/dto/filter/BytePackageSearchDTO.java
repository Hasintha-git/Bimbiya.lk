package com.bimbiya.server.dto.filter;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
@Data
public class BytePackageSearchDTO {
    private String mealName;
    private BigDecimal price;
    private String potion;
    private String status;
}
