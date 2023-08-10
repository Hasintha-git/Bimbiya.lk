package com.bimbiya.server.service.impl;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;

@Service
public class TokenServiceImpl {

    @Autowired
    private JwtDecoder jwtDecoder;

//    @Autowired
//    private JwtEncoder jwtEncoder;

    private final String secretKey = "your-secret-key"; // Replace this with your secret key

    public String generateJwtToken(Authentication authentication) {
        String subject = authentication.getName();

        String jwt = Jwts.builder()
                .setSubject(subject)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();

        boolean b = validateJwtToken(jwt);

        return jwt;
    }

    public boolean validateJwtToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true; // Token is valid
        } catch (JwtException | IllegalArgumentException e) {
            return false; // Token is invalid or expired
        }
    }


//    public String generateToken(Authentication authentication) {
//        Instant now = Instant.now();
//
//        String scope= authentication.getAuthorities().stream()
//                .map(GrantedAuthority::getAuthority)
//                .collect(Collectors.joining(""));
//
//        JWTClaimsSet claimsSet= JWTClaimsSet.Builder()
//                .issuer("self")
//                .issuedAt(now)
//                .subject(authentication.getName())
//                .claim("roles",scope)
//                .build();
//
//        return jwtEncoder.encode(JwtEncoderParameters.from(claimsSet)).getTokenValue();
//    }

}
