package com.kkr.farmassist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kkr.farmassist.entities.Farmer;

public interface FarmerRespository extends JpaRepository<Farmer,Long> {
    
}
