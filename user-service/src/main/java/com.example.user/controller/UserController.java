package com.example.user.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.user.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;

    public UserController(UserService service) {
        this.userService = service;
    }

    @GetMapping("/users")
    public List<String> getUsers() {
        return this.userService.getUsers();
    }
}
