package com.example.user.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.user.service.UserService;

import jakarta.validation.Valid;

import com.example.user.entity.*;
import com.example.user.dto.*;

import com.example.user.utils.Util;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;

    public UserController(UserService service) {
        this.userService = service;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return this.userService.getAll();
    }

    @SuppressWarnings("null")
    @PostMapping("/users")
    public Long addUsers(@Valid @RequestBody UserDTO data) {

        User user = Util.convertToEntity(data);
        return this.userService.addUser(user);
    }

    @DeleteMapping("/users/{id}")
    public Long deleteUser(@PathVariable Long id) {
        this.userService.delete(id);
        return id;
    }
}
