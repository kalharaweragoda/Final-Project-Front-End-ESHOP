# E-Commerce Application

A robust and scalable E-Commerce platform built with a modern **Microservices Architecture**, featuring a seamless user experience and high-performance backend.

## 🚀 Overview
This project is designed to handle high traffic and complex business logic by decoupling services. It leverages **Angular** for a dynamic frontend and **Spring Boot** for a powerful, distributed backend.

## ✨ Features
* **User Authentication & Authorization:** Secure login/signup using JWT.
* **Product Catalog:** Browse, search, and filter products by categories.
* **Shopping Cart:** Real-time cart management.
* **Order Management:** Seamless checkout process and order history.
* **Payment Integration:** Secure payment gateway support.
* **Admin Dashboard:** Manage products, users, and view sales analytics.

## 🏗️ Architecture
The application follows a **Microservices** approach, ensuring each module is independently deployable and scalable:
* **API Gateway:** Routes all client requests to the appropriate services.
* **Identity Service:** Manages user credentials and security.
* **Product Service:** Handles inventory and product data.
* **Order Service:** Processes transactions and order tracking.
* **Notification Service:** Sends emails/SMS for order updates.

## 🛠️ Technologies Used

### Frontend
* **Angular** (v17+)
* **TypeScript**
* **RxJS** & **NgRx** (State Management)
* **Bootstrap / Tailwind CSS**

### Backend
* **Java / Spring Boot**
* **Spring Cloud** (Netflix Eureka, Config Server, Gateway)
* **Spring Security** (OAuth2/JWT)
* **Hibernate / Spring Data JPA**

### Database & Tools
* **PostgreSQL / MySQL** (Relational Data)
* **Redis** (Caching)
* **Docker** (Containerization)

## 🏁 Getting Started


    npm install
    ng serve
    ```
