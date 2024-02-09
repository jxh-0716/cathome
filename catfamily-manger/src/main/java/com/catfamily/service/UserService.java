package com.catfamily.service;

import com.catfamily.pojo.User;

public interface UserService {
    User findByUsername(String name);
}
