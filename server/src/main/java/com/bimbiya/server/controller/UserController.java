package com.bimbiya.server.controller;

import com.bimbiya.server.dto.request.UserRequestDTO;
import com.bimbiya.server.service.UserService;
import com.bimbiya.server.util.EndPoint;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;

@RestController
@RequestMapping("/user")
@Log4j2
@CrossOrigin
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

    private UserService userService;
    @PostMapping(value = {EndPoint.USER_REQUEST_FILTER_LIST}, produces = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin(origins = "*")
    public ResponseEntity<Object> getUserFilteredList(
            @RequestBody UserRequestDTO userRequestDTO, Locale locale) throws Exception {
        log.debug("Received User get Filtered List Request {} -", userRequestDTO);
        return userService.getUserFilterList(userRequestDTO, locale);
    }

    @PostMapping(value = {EndPoint.USER_REQUEST_FIND_ID}, produces = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin(origins = "*")
    public ResponseEntity<Object> findUser(
            @RequestBody UserRequestDTO userRequestDTO, Locale locale) throws Exception {
        log.debug("Received User get Filtered List Request {} -", userRequestDTO);
        return userService.findUserById(userRequestDTO, locale);
    }
}
