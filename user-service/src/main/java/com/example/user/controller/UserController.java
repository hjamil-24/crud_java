package com.example.user.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.user.service.UserService;
import com.example.user.entity.*;

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
}
