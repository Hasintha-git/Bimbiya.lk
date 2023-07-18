package com.bimbiya.server.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@Entity
//@Table(name = "USER")
public class User {

//    @Id
    private int id;
    private String userName;
    private String password;
    private String email;

}
