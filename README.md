🛍️ Humo Fashion

  Humo Fashion is a modern, scalable e-commerce platform built with a microservice architecture,
  delivering a seamless online fashion shopping experience. The project leverages Node.js (TypeScript + Ts.ED) 
  for backend services and Nuxt 3 (Vue 3) for the frontend, adhering to clean architecture principles and 
  production-ready best practices

``` 

                      ┌──────────────────────┐
                      │      UI (Nuxt 3)     │
                      │   ─────────────────  │
                      │   Tailwind + Pinia   │
                      └──────────┬───────────┘
                                 │ REST API
          ┌──────────────────────┼────────────────────────┐
      │                      │                        │
 ┌────────▼────────┐   ┌─────────▼────────┐      ┌────────▼────────┐
 │  User Service   │   │ Catalog Service  │      │ Order Service   │
 │  Prisma + S3    │   │ Prisma + Search  │      │ Drizzle ORM     │
 └────────┬────────┘   └────────┬─────────┘      └────────┬────────┘
          │                     │                        │
          │       ┌─────────────▼──────────────┐          │
          │       │    Payment Service (Stripe)│          │
          │       └─────────────┬──────────────┘          │
          │                     │                         │
          └──────────► Kafka ◄──┼───────────────◄──────────┘
                               (Event Streaming)
```

🧰 Tech Stack
Backend:

  Runtime: Node.js with TypeScript 
  
  Framework: Ts.ED 
  
  Database: PostgreSQL (Dockerized) 
  
  ORMs: Prisma & Drizzle ORM 
  
  Message Broker: Apache Kafka (Event-driven communication) 
  
  Payment Gateway: Stripe API 
  
  File Storage: AWS S3 
  
  Validation: Zod 

  

Frontend:

  Framework: Nuxt 3 (Vue 3) 
  
  Styling: Tailwind CSS 
  
  State Management: Pinia 
  
  HTTP Client: Axios 
  

Infrastructure:

  Containerization: Docker & Docker Compose 
  
  Message Queue: Apache Kafka + Zookeeper 
  
  Configuration: Environment variables via .env 

  
  

🚀 Getting Started
Prerequisites

Node.js (v18 or higher) 

Yarn package manager 

Docker & Docker Compose 


Installation
1. Clone the repository 
```bash 
git clone https://github.com/yourusername/humo-fashion.git
cd humo-fashion
```
2.Start infrastructure services
```bash
# Start PostgreSQL databases
cd db 
docker compose up -d

# Start Kafka and Zookeeper
cd ../broker
docker-compose up
```

3. Launch backend service
```bash
# User service
cd "user service"
yarn install 
yarn dev

# Catalog service 
cd "catalog service"
yarn install
yarn dev

# Order service
cd "order service"
yarn isntall
yarn dev

# Social service
cd "social service"
yarn install
yarn dev
```

4. Run the frontend application
```bash
yarn install
yarn dev

-- 

## 📚 API Documentation
Interactive API documentation is available via Swagger UI:
```
http://localhost:8080/docs

🧪 Testing
Run the test suite with:
```yarn test```

👨‍💻 Author
Full-Stack Developer
Specializing in Node.js | Vue.js | Nuxt 3 | Prisma | PostgreSQL
🌐 GitHub: https://github.com/abdurakhmon-official

📝 License
This project is licensed under the MIT License — you are free to use, modify, and distribute it.
