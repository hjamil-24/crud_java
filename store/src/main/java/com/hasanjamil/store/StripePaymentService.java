package com.hasanjamil.store;

import org.springframework.stereotype.Component;

@Component
public class StripePaymentService implements PaymentService {
    public void processPayment(int amount) {
        System.out.println("STRIPE");
        System.out.println("Amount: " + amount);
    }
}
