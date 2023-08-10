package com.bimbiya.server.dto.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RegistrationDTO {
    private String userName;
    private String password;
}
