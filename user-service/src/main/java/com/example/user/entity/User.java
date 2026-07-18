package com.example.user.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    public User() {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = true, length = 100)
    private String lastName;

    @Column(nullable = false)
    private int age;

    public int getAge() {
        return this.age;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public Long getId() {
        return this.id;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setAge(int n) {
        this.age = n;
    }

    public void setFirstName(String fName) {
        this.firstName = fName;
    }

    public void setLastName(String lName) {
        this.lastName = lName;
    }
}
