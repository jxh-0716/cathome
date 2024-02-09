package com.catfamily.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.catfamily.mapper.UserMapper;
import com.catfamily.pojo.User;
import com.catfamily.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public User findByUsername(String name) {
        User u = userMapper.findByUsername(name);
        return u;
    }
}
