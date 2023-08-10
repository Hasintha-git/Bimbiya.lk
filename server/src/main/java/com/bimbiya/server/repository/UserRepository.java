package com.bimbiya.server.repository;

import com.bimbiya.server.entity.SystemUser;
import com.bimbiya.server.util.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<SystemUser, Long>, JpaSpecificationExecutor<SystemUser> {
    Optional<SystemUser> findByUsername(String userName);
    SystemUser findByIdAndStatusNot(Long id, Status status);
}
