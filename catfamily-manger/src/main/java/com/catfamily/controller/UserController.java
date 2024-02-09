package com.catfamily.controller;

import org.springframework.web.bind.annotation.RestController;

import com.catfamily.pojo.User;
import com.catfamily.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/register")
    public User register(String name, String password) {
        User u = userService.findByUsername(name);
        return u;
    }
}
