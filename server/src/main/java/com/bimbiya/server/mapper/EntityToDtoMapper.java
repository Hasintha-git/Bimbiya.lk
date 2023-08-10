package com.bimbiya.server.mapper;


import com.bimbiya.server.dto.response.UserResponseDTO;
import com.bimbiya.server.entity.SystemUser;

public class EntityToDtoMapper {
    private EntityToDtoMapper() {

    }
    public static UserResponseDTO mapUser(SystemUser systemUser) {
        UserResponseDTO userResponseDTO = new UserResponseDTO();
        userResponseDTO.setId(systemUser.getId());
        userResponseDTO.setUsername(systemUser.getUsername());
        userResponseDTO.setEmail(systemUser.getEmail());
        userResponseDTO.setStatus(String.valueOf(systemUser.getStatus()));
        userResponseDTO.setPwStatus(String.valueOf(systemUser.getPwStatus()));
        userResponseDTO.setCity(systemUser.getCity());
        userResponseDTO.setNic(systemUser.getNic());
        userResponseDTO.setDateOfBirth(systemUser.getDateOfBirth());
        userResponseDTO.setNic(systemUser.getNic());
        userResponseDTO.setNic(systemUser.getNic());
        userResponseDTO.setNic(systemUser.getNic());
        userResponseDTO.setNic(systemUser.getNic());
        return userResponseDTO;
    }

}
