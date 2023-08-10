package com.bimbiya.server.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
public class UserRequestDTO {
    private Long id;
    private String userName;
    private String password;
    private Long userRole;
    private String fullName;
    private String nic;
    private String email;
    private Long mobileNo;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Colombo")
    private Date dob;

    private String address;
    private String city;
    private String status;
    private String passwordStatus;
    private Long attempt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Colombo")
    private Date lastLoggedDate;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Colombo")
    private Date passwordExpireDate;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Colombo")
    private Date createdTime;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Colombo")
    private Date lastUpdatedTime;

    private String createdUser;

    private String lastUpdatedUser;

    private int pageNumber;
    private int pageSize;
    private String sortColumn;
    private String sortDirection;

    private UserRequestSearchDTO userRequestSearchDTO;
}
