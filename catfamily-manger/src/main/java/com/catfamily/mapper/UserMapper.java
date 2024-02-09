package com.catfamily.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.catfamily.pojo.User;

@Mapper
public interface UserMapper {
    @Select("select * from user where name = #{name}")
    User findByUsername(String name);
}
