package com.kkr.farmassist.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kkr.farmassist.entities.Admin;
import com.kkr.farmassist.repositories.AdminRepository;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @GetMapping("")
    // example : http://localhost:8080/admin?email=user@gmail.com
    public ResponseEntity<Admin> getAdminByMail(@RequestParam String email) {
        // replace this logic to directly find a user by his email
        List<Admin> farmers = adminRepository.findAll();
        List<Admin> res = farmers.stream().filter(f -> f.getEmail().equals(email)).collect(Collectors.toList());
        if (res.size() > 0) {
            return new ResponseEntity<>(res.get(0), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<String> createAdmin(@RequestBody Admin admin) {
        try {
            adminRepository.save(admin);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            if (e.getMessage().contains("email")) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
