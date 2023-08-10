package com.bimbiya.server.controller;

import com.bimbiya.server.dto.response.LoginResponseDTO;
import com.bimbiya.server.dto.request.RegistrationDTO;
import com.bimbiya.server.entity.SystemUser;
import com.bimbiya.server.service.impl.AuthenticationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationServiceImpl authenticationServiceImpl;

    @PostMapping("/register")
    public SystemUser registerUser(@RequestBody RegistrationDTO registrationDTO) {
        return authenticationServiceImpl.registerUser(registrationDTO.getUserName(),registrationDTO.getPassword());
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO registrationDTO) {
        return authenticationServiceImpl.loginUser(registrationDTO.getUserName(),registrationDTO.getPassword());
    }

}
