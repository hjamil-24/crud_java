package com.example.user.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    public List<String> getUsers() {
        ArrayList<String> users = new ArrayList<String>();
        users.add("Hasan");
        users.add("Hammad");
        return users ;
    }    
}
