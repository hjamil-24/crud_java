package com.example.user.utils;

import com.example.user.dto.*;
import com.example.user.entity.*;

public class Util {
    public static User convertToEntity(UserDTO data) {
        User user = new User();
        user.setAge(data.getAge());
        user.setFirstName(data.getFirstName());
        user.setLastName(data.getLastName());
        return user;
    }
}
