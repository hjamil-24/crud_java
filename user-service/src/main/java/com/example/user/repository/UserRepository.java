package com.example.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.user.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByAge(int age);
}
