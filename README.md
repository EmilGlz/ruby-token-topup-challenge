# ruby-token-topup-challenge

This repository contains three applications developed to address the code challenge requirements. Each application is built using different technologies: a **Ruby Console App**, a **Rails API**, and a **React Frontend**. Below are the instructions on how to review and run each project, along with a brief description of the functionality implemented.

## UI Showcase
https://thrive-assignment-fe-ckgtb0gyhch9c2fc.canadacentral-01.azurewebsites.net/

## Table of Contents

- [1) Ruby Console Application](#1-ruby-console-application)
- [2) React Frontend Application](#2-react-frontend-application)
- [3) Rails API Application](#3-rails-api-application)
- [4) Deployment](#4-deployment)

---


## 1) Ruby Console Application

### To Run:

```bash
cd console-script
ruby challenge.rbde
```

### Description
The Ruby Console Application processes data from user.json and companies.json, generating an output file named output.txt. The application performs the following tasks:
- Loads user and company data from the provided JSON files.
- Identifies active users belonging to companies and calculates their token top-ups based on the company's specified top-up amount.
- Checks the email status of both the user and the company to determine if an email notification should be indicated in the output.
  - If the user's email status is true, it indicates that an email was sent.
  - If the user's email status is false, no email is sent, regardless of the company's email status. 
- Outputs the processed information in a structured format while handling potential bad data.
- Sorts companies by company ID and users by last name for easy readability.


## 2) React Frontend Application

### To Run:

```bash
cd react-fe
npm install          # Install dependencies
npm run dev          # Start the development server
```

### Description
The React Frontend Application provides a user interface for interacting with the backend Rails API. Key features include:
- Built using Vite, React, TypeScript, and Tailwind CSS for a responsive design.
- Consists of three main pages:
  - MainPage: Introduction and navigation to other pages. On click to "Process" button processes and loads data to UI.
  - UsersPage: Displays a list of users fetched from the backend.
  - CompaniesPage: Displays a list of companies fetched from the backend.
- The application communicates with the backend API to retrieve user and company data using the react-fe/src/api.ts file for API calls. You can change API_URL in order to test with backend running locally.


## 3) Rails API Application

### To Run:

```bash
cd rails-api
bundle install            # Install dependencies
rails db:migrate          # Run database migrations
rails db:seed             # Seed the database with initial data
rails server              # Start the Rails server
```

### Endpoints
GET - http://127.0.0.1:3000/api/users - Gets a list of users in JSON format.

GET - http://127.0.0.1:3000/api/companies - Gets a list of companies in JSON format.

POST - http://127.0.0.1:3000/api/users/process_users - Processes the users and companies data according to the assignment requirements.

### Description
The Rails API Application serves as the backend for the project, providing endpoints for user and company data. It includes:
- Two models, User and Company, representing the respective data.
- Two controllers for handling API requests and returning JSON responses.
- The process_users endpoint, which implements the main processing logic for token top-ups based on the challenge criteria.
- A service class named ProcessUsersService that encapsulates the processing logic, ensuring the controller remains clean and maintainable.


## 4) Deployment

The applications have been deployed to cloud platforms for review:
- Frontend (React) is deployed on Azure Web Apps.
- Backend (Rails API) is deployed on DigitalOcean App Platform.

You can view and interact with the deployed applications using the endpoints and instructions provided above. All source code is organized into their respective project folders.


### Endpoints for backend in server:
GET - https://lionfish-app-9yqqg.ondigitalocean.app/api/users

GET - https://lionfish-app-9yqqg.ondigitalocean.app/api/companies

POST - https://lionfish-app-9yqqg.ondigitalocean.app/api/users/process_users