package com.kkr.farmassist.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kkr.farmassist.entities.Farmer;
import com.kkr.farmassist.repositories.FarmerRespository;

@RestController
@RequestMapping("/farmers")
@CrossOrigin
public class FarmerController {

    @Autowired
    private FarmerRespository farmerRespository;

    @GetMapping("")
    // example : http://localhost:8080/farmers?email=user@gmail.com
    public ResponseEntity<Farmer> getFarmerByMail(@RequestParam String email) {
        // replace this logic to directly find a user by his email
        List<Farmer> farmers = farmerRespository.findAll();
        List<Farmer> res = farmers.stream().filter(f -> f.getEmail().equals(email)).collect(Collectors.toList());
        if (res.size() > 0) {
            return new ResponseEntity<>(res.get(0), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // example http://localhost:8080/farmers/all
    @GetMapping("/all")
    public List<Farmer> getAllFarmers() {
        return farmerRespository.findAll();
    }

    @PostMapping(path = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> createFarmer(@RequestBody Farmer farmer) {
        try {
            farmerRespository.save(farmer);
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
