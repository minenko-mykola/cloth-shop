# Cloth Shop

## Overview

**Cloth Shop** is a full-stack e-commerce application built to gain hands-on experience 
in frontend development and system architecture.

---

## Roadmap

- [ ] Finalize MongoDB schemas
- [ ] Code products-service
- [ ] Code search-indexer
- [ ] Code schedule-service
- [ ] Migrate frontend state management from MobX to Redux

## Project Status

The project is currently under active development. Core application functionality has not been implemented yet.

See the [Roadmap](#roadmap) for planned tasks.
---

## Authors 
- Mykola Minenko - [My Github profile](https://github.com/minenko-mykola)
---
## Tech Stack

### Frontend
- **Next.js (React 19)** — React framework for server-rendered and client-side applications
- **Chakra UI** — UI component library
- **MobX** — state management (planned migration to Redux)
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
- **MongoDB** — document-oriented database
- **MySQL** - relational database
- **Sequelize (TypeScript)** — ORM for MySQL
- **Mongoose** - ODM for MongoDB

---

### Performance & Search
- **Redis** — caching and fast data access
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
- [Node.js](https://nodejs.org/) (for local development)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/minenko-mykola/cloth-shop.git
```

2. Navigate to the project directory:
```bash
cd cloth-shop
```

## Usage

1. Starting the application:
    ```bash
    docker compose up --build --watch
    ```

2. Open [http://localhost](http://localhost) in your browser.

## Useful Docker Commands

### Stop the application

```bash
    docker compose down
```

### View service logs

```bash
    docker compose logs -f
```

### Rebuild and restart services
```bash
    docker compose up -d --build
```