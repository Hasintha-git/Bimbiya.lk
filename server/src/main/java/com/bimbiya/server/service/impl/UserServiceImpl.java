package com.bimbiya.server.service.impl;

import com.bimbiya.server.dto.request.UserRequestDTO;
import com.bimbiya.server.dto.response.UserResponseDTO;
import com.bimbiya.server.entity.SystemUser;
import com.bimbiya.server.mapper.EntityToDtoMapper;
import com.bimbiya.server.mapper.ResponseGenerator;
import com.bimbiya.server.repository.UserRepository;
import com.bimbiya.server.repository.specifications.UserSpecification;
import com.bimbiya.server.service.UserService;
import com.bimbiya.server.util.MessageConstant;
import com.bimbiya.server.util.ResponseCode;
import com.bimbiya.server.util.enums.Status;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserServiceImpl implements UserService {

    private PasswordEncoder encoder;

    private UserRepository userRepository;

    private UserSpecification userSpecification;

    private ModelMapper modelMapper;

    private ResponseGenerator responseGenerator;

    private MessageSource messageSource;
    @Override
    @Transactional
    public ResponseEntity<Object> getUserFilterList(UserRequestDTO userRequestDTO, Locale locale) throws Exception {
        try {
            PageRequest pageRequest;

            if (Objects.nonNull(userRequestDTO.getSortColumn()) && Objects.nonNull(userRequestDTO.getSortDirection()) &&
                    !userRequestDTO.getSortColumn().isEmpty() && !userRequestDTO.getSortDirection().isEmpty()) {
                pageRequest = PageRequest.of(
                        userRequestDTO.getPageNumber(), userRequestDTO.getPageSize(),
                        Sort.by(Sort.Direction.valueOf(userRequestDTO.getSortDirection()), userRequestDTO.getSortColumn())
                );
                System.out.println(">>>> if");
            }else{
                System.out.println(">>>> else");

                pageRequest = PageRequest.of(userRequestDTO.getPageNumber(), userRequestDTO.getPageSize());

            }

            List<SystemUser> faqList = ((Objects.isNull(userRequestDTO.getUserRequestSearchDTO())) ? userRepository.findAll
                    (userSpecification.generateSearchCriteria(Status.deleted), pageRequest) :
                    userRepository.findAll(userSpecification.generateSearchCriteria(userRequestDTO.getUserRequestSearchDTO()), pageRequest))
                    .getContent();

            Long fullCount = (Objects.isNull(userRequestDTO.getUserRequestSearchDTO())) ? userRepository.count
                    (userSpecification.generateSearchCriteria(Status.deleted)) :
                    userRepository.count(userSpecification.generateSearchCriteria(userRequestDTO.getUserRequestSearchDTO()));

            List<UserResponseDTO> collect = faqList.stream()
                    .map(faq -> modelMapper.map(faq, UserResponseDTO.class))
                    .collect(Collectors.toList());

            return responseGenerator
                    .generateSuccessResponse(userRequestDTO, HttpStatus.OK, ResponseCode.USER_GET_SUCCESS
                            , MessageConstant.SUCCESSFULLY_GET, locale, collect, fullCount);

        } catch (EntityNotFoundException ex) {
            log.info(ex.getMessage());
            throw ex;
        }catch (Exception e) {
            log.error(e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    @Transactional
    public ResponseEntity<Object> findUserById(UserRequestDTO userRequestDTO, Locale locale) throws Exception {
        try {
            SystemUser systemUser = Optional.ofNullable(userRepository.findByIdAndStatusNot(userRequestDTO.getId(), Status.deleted)).orElse(
                    null
            );

            if (Objects.isNull(systemUser)) {
                return responseGenerator.generateErrorResponse(userRequestDTO, HttpStatus.NOT_FOUND,
                        ResponseCode.USER_GET_SUCCESS, MessageConstant.USER_NOT_FOUND, new
                                Object[]{userRequestDTO.getId()},locale);
            }

            UserResponseDTO faqAdminResponse = EntityToDtoMapper.mapUser(systemUser);

            return responseGenerator
                    .generateSuccessResponse(userRequestDTO, HttpStatus.OK, ResponseCode.USER_GET_SUCCESS,
                            MessageConstant.SUCCESSFULLY_GET, locale, faqAdminResponse);
        } catch (EntityNotFoundException ex) {
            log.info(ex.getMessage());
            throw ex;
        } catch (Exception ex) {
            log.error(ex.getMessage());
            throw ex;
        }
    }

    @Override
    @Transactional
    public ResponseEntity<Object> saveUser(UserRequestDTO userRequestDTO, Locale locale) throws Exception {
        return null;
    }

    @Override
    @Transactional
    public ResponseEntity<Object> editUser(UserRequestDTO userRequestDTO, Locale locale) {
        return null;
    }

    @Override
    @Transactional
    public ResponseEntity<Object> deleteUser(UserRequestDTO userRequestDTO, Locale locale) {
        return null;
    }
}
