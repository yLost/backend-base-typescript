# Backend Base Typescript

A solid foundation for building backend services with Node.js and TypeScript. This repository serves as a template for my future backend projects, powered by a modern and efficient stack.

## ✨ Features

-   **TypeScript:** Code with types for more robust and maintainable applications.
-   **Fastify:** High-performance, low-overhead web framework.
-   **Mongoose:** Elegant MongoDB object modeling for Node.js.
-   **Zod:** TypeScript-first schema validation with static type inference.
-   **Structured for Scalability:** A pre-defined folder structure to keep your code organized as it grows.
-   **Environment Variables:** Easy configuration using `.env` files.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or newer recommended)
-   [pnpm](https://pnpm.io/)
-   A running [MongoDB](https://www.mongodb.com/) instance (local or cloud-based)

### Installation

1.  **Clone the repository** (or use it as a template on GitHub)
    ```bash
    git clone https://github.com/yLost/backend-base-typescript.git
    cd backend-base-typescript
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables**
    Create a `.env` file in the root of the project. You can start by copying the example file. You will need to add your MongoDB connection string.
    ```bash
    cp example.env .env
    ```
    Your `.env` file should contain variables like:
    ```env
    MONGODB_URI=mongodb://localhost:27017/mydatabase
    PORT=3000
    ```

## Usage

-   **Development**
    To run the server in development mode with auto-reloading:
    ```bash
    pnpm dev
    ```

-   **Production**
    To build and run the server for production:
    ```bash
    pnpm build
    pnpm start
    ```

## 📁 Folder Structure

The project is organized to separate concerns and encourage modularity.

```
/
├── dist/             # Compiled TypeScript files for production
├── src/
│   ├── database/     # MongoDB database connection setup
│   ├── decorators/   # Custom decorators
│   ├── errors/       # Custom error classes (e.g., BadRequest, MissingPermissions)
│   ├── interceptors/ # Middlewares and handlers
│   ├── models/       # Mongoose models
│   ├── modules/      # Feature modules containing services and controllers
│   ├── schemes/      # Zod schemas for data validation
│   └── app.ts        # Application entry point and Fastify server setup
├── .env.example      # Example environment variables
├── package.json      # Project dependencies and scripts
└── tsconfig.json     # TypeScript compiler options
```

## 🛠️ Technologies Used

-   [Node.js](https://nodejs.org/) - JavaScript runtime
-   [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
-   [Fastify](https://www.fastify.io/) - Web framework for Node.js
-   [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool
-   [Zod](https://zod.dev/) - Schema validation library

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
