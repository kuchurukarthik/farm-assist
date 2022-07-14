package com.kkr.farmassist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kkr.farmassist.entities.Trader;

public interface TraderRepository extends JpaRepository<Trader, Long> {
    Trader findByEmail(String email);
}   
