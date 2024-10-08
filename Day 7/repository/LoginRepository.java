package com.example.q1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.q1.model.Login;

public interface LoginRepository extends JpaRepository<Login, Integer> {
    Login findByUsername(String username);
}
