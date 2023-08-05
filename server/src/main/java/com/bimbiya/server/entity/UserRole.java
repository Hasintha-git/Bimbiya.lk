package com.bimbiya.server.entity;

import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;
@Data
@Entity
@Table(name = "user_role")
public class UserRole extends CommonEntity
{
    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "ID", unique = true, nullable = false)
    private Long id;

    @Column(name = "CODE", nullable = false, length = 8)
    private String code;

    @Column(name = "DESCRIPTION", nullable = false, length = 64)
    private String description;

    @Column(name = "STATUS", nullable = false, length = 8)
    private String statusCode;

}
