# Vite Default

Vite Default is a web application project template built with Vite, TypeScript, and SWC. It provides default routes, pages, layouts, and protected routes to help you get started quickly with your web development projects.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Vite Default serves as a foundation for web applications, allowing developers to focus on building features rather than setting up the project structure. It includes common development tools and configurations to streamline the development process.

Key features include:

- Vite for fast development and building
- TypeScript for static type checking
- SWC for efficient JavaScript compilation
- Default route setup
- Page and layout components
- Protected route example

## Getting Started

Follow these steps to set up the Vite Default project locally.

### Prerequisites

Make sure you have the following software and dependencies installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (choose one)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rgp-paleocapa/vite-default.git

## Usage

1. To start the development server, use the following command:
   ```bash
   npm run dev
   # or
   yarn dev
  
This will start the development server, and you can access your application at http://localhost:3000.
  
## Project Structure 

The project structure is organised as follows:

   ```bash
   vite-default/
  ├── public/
  └── src/
      ├── components/
      │   ├── errors/
      │   │   ├── Maintenance/
      │   │   └── NotFound/
      │   ├── layout/
      │   └── utils/
      ├── hooks/
      ├── pages/
      │   ├── about/
      │   ├── admin/
      │   ├── customPage/
      │   ├── home/
      │   └── protectedPage/
      ├── routes/
      ├── types/
      └── utils/
```
    

- public: Contains static assets that are served as-is.
- src: Contains the application source code, including components, pages, hooks, and utility functions.

Feel free to customize and extend this structure to suit your project's needs.

## Contributing

Contributions to Vite Default are welcome! If you'd like to contribute, please follow these guidelines:

- Create issues for bug reports, feature requests, or discussions.
- Fork the repository, create a branch, and submit pull requests for code contributions.

## License

This project is not currently licensed. You can add a license of your choice by including a LICENSE file in the project root.

Feel free to modify this README further to match your project's specific details and requirements. A well-documented README is essential for helping other developers understand your project and get started with it.