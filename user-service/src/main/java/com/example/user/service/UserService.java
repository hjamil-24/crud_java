package com.example.user.service;

import java.util.List;

import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.user.entity.User;
import com.example.user.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepo) {
        this.userRepository = userRepo;
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User save(@NonNull User user) {
        return userRepository.save(user);
    }

    public Long addUser(@NonNull User user) {
        User u = userRepository.save(user);
        return u.getId();
    }

    public void delete(@NonNull Long id) {
        userRepository.deleteById(id);
    }
}
