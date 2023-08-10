package com.bimbiya.server.service.impl;

import com.bimbiya.server.dto.response.LoginResponseDTO;
import com.bimbiya.server.entity.SystemUser;
import com.bimbiya.server.entity.UserRole;
import com.bimbiya.server.repository.UserRepository;
import com.bimbiya.server.repository.UserRoleRepository;
import com.bimbiya.server.util.enums.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@Transactional
public class AuthenticationServiceImpl {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenServiceImpl tokenServiceImpl;

    public SystemUser registerUser(String userName, String password) {
        System.out.println("auth called");
        String encodePassword=passwordEncoder.encode(password);
        UserRole userRole = userRoleRepository.findByCode("admin").get();

        SystemUser systemUser=new SystemUser();
        systemUser.setUsername(userName);
        systemUser.setPassword(encodePassword);
        systemUser.setUserRole(userRole);
        systemUser.setAddress("test");
        systemUser.setCity("test");
        systemUser.setMobileNo("test");
        systemUser.setAttempt(0);
        systemUser.setEmail("test");
        systemUser.setNic("1999999999999");
        systemUser.setFullName("test");
        systemUser.setDateOfBirth(new Date());
        systemUser.setLastLoggedDate(new Date());
        systemUser.setPasswordExpireDate(new Date());
        systemUser.setPwStatus(Status.active);
        systemUser.setStatus(Status.active);
        systemUser.setCreatedUser("test");
        systemUser.setLastUpdatedUser("test");
        systemUser.setCreatedTime(new Date());
        systemUser.setLastUpdatedTime(new Date());
        return userRepository.save(systemUser);

    }

    public LoginResponseDTO loginUser(String userName, String password) {
        try{
            UsernamePasswordAuthenticationToken us = new UsernamePasswordAuthenticationToken(userName, password);
            System.out.println("hiiiiiiiiii"+us.getName());
            Authentication authentication= authenticationManager.authenticate(
                    us
            );

            String token = tokenServiceImpl.generateJwtToken(authentication);

            SystemUser systemUser = userRepository.findByUsername(userName).get();
            return new LoginResponseDTO(systemUser,token);

        }catch (AuthenticationException e) {
            return new LoginResponseDTO(null,"");
        }
    }
}
