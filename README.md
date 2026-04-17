# ✈️ AIRBOOK PH

### Technical Specification Document (TSD)

**Version 1.2 --- April 15, 2026**

------------------------------------------------------------------------

## 📌 Project Overview

AIRBOOK PH is a full-stack web-based airline booking system for guests,
users, and admins.

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

-   Next.js
-   React
-   CSS Modules
-   Axios

### Backend

-   Node.js
-   Express.js
-   MongoDB (Mongoose)
-   JWT
-   Bcrypt

------------------------------------------------------------------------

## 🎯 Core Features

-   Authentication & Authorization
-   Flight Search
-   Seat Hold System
-   Booking System
-   Payment Processing
-   Ticket Generation
-   Booking Checker
-   Admin Dashboard
-   Audit Logging

------------------------------------------------------------------------

## ⚙️ Functional Requirements

-   User authentication and role-based access
-   Flight discovery and booking
-   Seat reservation and locking
-   Payment processing
-   Admin CRUD operations

------------------------------------------------------------------------

## 🧑‍💼 Admin Endpoints

    GET    /admin/flights
    POST   /admin/flights
    PATCH  /admin/flights/:id
    DELETE /admin/flights/:id

    GET    /admin/bookings
    PATCH  /admin/bookings/:id
    DELETE /admin/bookings/:id

    GET    /admin/users
    PATCH  /admin/users/:id
    DELETE /admin/users/:id

    GET    /admin/payments
    POST   /admin/payments/:id/refund

    GET    /admin/audit-logs

------------------------------------------------------------------------

## 📝 Summary

AIRBOOK PH is a scalable airline booking platform with full booking
lifecycle and admin control.
