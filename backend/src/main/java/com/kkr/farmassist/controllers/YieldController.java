package com.kkr.farmassist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

import com.kkr.farmassist.entities.Yield;
import com.kkr.farmassist.repositories.YieldRepository;

@RestController
@RequestMapping("/yield")
@CrossOrigin
public class YieldController {
    @Autowired
    private YieldRepository yieldRepository;

    @GetMapping("/all")
    public List<Yield> getAllYields() {
        return yieldRepository.findAll();
    }

    @PostMapping(path = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveYield(@RequestBody Yield yield){
        System.out.println("requestbody" + yield);
        yieldRepository.save(yield);
    }
}
