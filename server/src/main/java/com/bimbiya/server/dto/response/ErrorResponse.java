package com.bimbiya.server.dto.response;

import lombok.Data;

@Data
public class ErrorResponse {
    private String errorCode;

    private String errorDescription;

    private String errorMessageType;

    private String errorComponent;

    private String errorDetail;

    private String epicUserID;

    private Object data;
}
