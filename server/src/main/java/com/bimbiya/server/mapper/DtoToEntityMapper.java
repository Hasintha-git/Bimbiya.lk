package com.bimbiya.server.mapper;


import com.bimbiya.server.dto.request.UserRequestDTO;
import com.bimbiya.server.entity.SystemUser;
import com.bimbiya.server.util.enums.Status;

import java.util.Objects;

public class DtoToEntityMapper {
    private DtoToEntityMapper() {

    }
    public static void mapUser(SystemUser systemUser, UserRequestDTO userRequestDTO) {
        systemUser.setStatus(Status.valueOf(userRequestDTO.getStatusCode()));
        systemUser.setPwStatus(Status.valueOf(userRequestDTO.getPwStatus()));
        if (Objects.nonNull(userRequestDTO.getPasswordExpireDate())) {
            systemUser.setPasswordExpireDate(userRequestDTO.getPasswordExpireDate());
        }
        systemUser.setLastUpdatedUser(userRequestDTO.getLastUpdatedUser());
        systemUser.setAttempt(0);
        systemUser.setEmail(userRequestDTO.getEmail());
        systemUser.setMobileNo(userRequestDTO.getMobileNo());
        systemUser.setFullName(userRequestDTO.getFullName());
        systemUser.setAddress(userRequestDTO.getAddress());
        systemUser.setCity(userRequestDTO.getCity());
    }

}