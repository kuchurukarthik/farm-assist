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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kkr.farmassist.entities.Trader;
import com.kkr.farmassist.repositories.TraderRepository;

@RestController
@RequestMapping("/traders")
@CrossOrigin
public class TraderController {

    @Autowired
    private TraderRepository traderRepository;

    @GetMapping("")
    // example : http://localhost:8080/traders?email=user@gmail.com
    public ResponseEntity<Trader> getTraderByMail(@RequestParam String email) {
        // replace this logic to directly find a user by his email
        System.out.println("use this" + traderRepository.findByEmail(email));
        List<Trader> traders = traderRepository.findAll();
        List<Trader> res = traders.stream().filter(f -> f.getEmail().equals(email)).collect(Collectors.toList());
        if (res.size() > 0) {
            return new ResponseEntity<>(res.get(0), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public List<Trader> getAllTraders() {
        return traderRepository.findAll();
    }

    @PostMapping(path = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> createTrader(@RequestBody Trader trader) {
        try {
            traderRepository.save(trader);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            if (e.getMessage().contains("email")) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    @PutMapping(path = "/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> updateTrader(@RequestBody Trader trader) {
        try {
            traderRepository.save(trader);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            ;
            if (e.getMessage().contains("email")) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
            } else {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
