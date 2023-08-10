package com.bimbiya.server.entity;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;
@Data
@Entity
@Table(name = "user_role")
public class UserRole extends CommonEntity implements GrantedAuthority
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

    public UserRole() {
    }

    public UserRole(Long id, String code) {
        this.id = id;
        this.code = code;
    }

    public UserRole(String code) {
        this.code = code;
    }

    public UserRole( String code, String description, String statusCode) {
        this.code = code;
        this.description = description;
        this.statusCode = statusCode;
    }

    @Override
    public String getAuthority() {
        return this.code;
    }
}
