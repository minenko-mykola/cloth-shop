# Cloth Shop

## Overview

**Cloth Shop** is a full-stack e-commerce application built to gain hands-on experience 
in frontend development and system architecture.

---

## Authors 
- Mykola Minenko - [My Github profile](https://github.com/minenko-mykola) 
- I am a **second-year student** at the **Taras Shevchenko National University of Kyiv**,
specializing in **Software Engineering**.

---
## Tech Stack

### Frontend
- **Next.js (React 19)** — modern SSR/SPA framework
- **Chakra UI** — UI component library
- **MobX** — state management
- **React Hook Form** — form handling
- **i18next** — internationalization (i18n)

---

### Backend
- **Node.js + Express** — server-side logic
- **TypeScript** — static typing
- **Passport (JWT, Local)** — authentication
- **bcrypt / jsonwebtoken** — security
- **Multer** — file uploads

---

### Data & Storage
- **PostgreSQL / MySQL** — relational databases
- **Sequelize (TypeScript)** — ORM

---

### Performance & Search
- **Redis** — caching and fast state updates
- **Elasticsearch** — search & indexing

---

### Messaging
- **Kafka** — asynchronous event processing

---

### DevOps
- **Docker** — containerization
- **dotenv** — environment configuration

---

## Requirements

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/minenko-mykola/cloth-shop.git
```

```bash
cd cloth-shop
```

2. Install dependencies:

    - Frontend:

   ```bash
   cd frontend
   ```

    ```bash
    npm install
    ```

    - Backend:

   ```bash
   cd backend
   ```

    ```bash
    npm install
    ```
---

## Usage

1. Starting Backend:
    ```bash
    docker-compose up -d --build
    ```
2. Starting Frontend:
    ```bash
    npm run dev      
    ```
