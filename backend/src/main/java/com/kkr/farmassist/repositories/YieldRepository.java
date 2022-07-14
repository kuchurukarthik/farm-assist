package com.kkr.farmassist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kkr.farmassist.entities.Yield;

public interface YieldRepository extends JpaRepository<Yield, Long> {

}
