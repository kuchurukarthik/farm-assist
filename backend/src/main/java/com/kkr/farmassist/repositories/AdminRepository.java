package com.kkr.farmassist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kkr.farmassist.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin,Long>{
    
}
