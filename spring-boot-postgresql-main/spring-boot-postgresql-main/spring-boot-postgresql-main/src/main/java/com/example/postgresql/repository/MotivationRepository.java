package com.example.postgresql.repository;

import com.example.postgresql.entities.Motivation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MotivationRepository extends JpaRepository<Motivation, Integer> {
}
