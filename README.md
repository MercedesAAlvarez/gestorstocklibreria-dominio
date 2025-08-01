# 📦 Domain Layer - School Supplies Stock Manager

This folder contains the **domain logic** of the School Supplies Stock Manager.  
It follows the principles of **Clean Architecture**, **Clean Code**, and **TDD**, using **TypeScript**.

---

## 📁 Folder Structure

mi-proyecto/
├── README.md
├── package.json
├── tsconfig.json
├── domain/
│   ├── package.json
│   └── src/
│       ├── entities/
│       ├── use-cases/
│       └── services/
├── apps/
│   └── backend/
│       ├── package.json
│       └── src/
└── frontend/  


---

## 📌 Implemented Entities

### ✅ `Product`
- `id`: number
- `name`: string
- `price`: number
- `stock`: number

### ✅ `User`
- `id`: number
- `name`: string
- `email`: string
- `password`: string
- `role`: string (`admin`, `user`, etc.)

---

## ✅ Use Cases Implemented

### 🛒 Product Use Cases
- `CreateProduct`
- `GetAllProducts`
- `GetProductById`
- `UpdateProduct`
- `DeleteProduct`

### 👤 User Use Cases
- `CreateUser`
- `FindUserById`
- `DeleteUser`

Each use case is  tested using Vitest.

---

## 🧪 Running Tests

```bash
# Go to the domain folder
cd domain

# Install dependencies
npm install

# Run all unit tests
npx vitest


🧰 Technologies

TypeScript

Vitest

Clean Architecture

Test-Driven Development (TDD)

Advanced Git

