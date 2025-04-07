# Brighte Eats Frontend

## Overview

The Brighte Eats Frontend is a modern web application built to capture expressions of interest for Brighte's new food service offering and provide an administrative dashboard for lead management. The application allows potential customers to register their interest in Brighte Eats services (delivery, pick-up, and payment) and enables administrators to view and manage these leads through an intuitive dashboard interface.

## Development Approach

**Note on Code Generation**: Approximately 95% of this codebase was generated using AI assistant. AI assistance was utilized for HTML, CSS, and boilerplate code generation to accelerate development, as these aspects can be particularly time-consuming. All generated code was thoroughly reviewed, tested, and adjusted as needed to address any issues such as version mismatches, GraphQL integration challenges, or Next.js compatibility concerns.

**Development Process**: Having invested significant time developing the GraphQL API backend, I expedited the frontend development process by leveraging AI assistance. As a backend-focused full stack developer, frontend development is not my primary area of expertise. Many of the frontend technologies used in this project are ones I'm still in the learning process of mastering. While I can implement and modify frontend features, making substantial UI changes during a live coding interview would be challenging, though I could certainly accomplish these tasks given appropriate time. 😅

## Security Considerations

**Note on Dashboard Access**: In this demonstration project, the dashboard page is publicly accessible for ease of review and testing. In a real-world production environment, the dashboard would be protected by proper authentication and authorization mechanisms to ensure that only authorized administrative users can access sensitive lead information. Implementation of secure authentication was intentionally omitted from this project scope to focus on core functionality demonstration.

## UI Sneak Peek

![brighte-eats-home-page](https://github.com/user-attachments/assets/edcea198-250a-444c-b40c-8e7df43a2497)

![brighte-eats-dashboard-page](https://github.com/user-attachments/assets/1a3b08b3-860d-4916-803c-2b50606ad8d1)

![brighte-eats-lead-details-page](https://github.com/user-attachments/assets/dc62f253-ae70-4f72-bd75-78502592b7c6)



## Technology Stack
![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Apollo](https://img.shields.io/badge/Apollo_Client-311C87?style=for-the-badge&logo=apollographql&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)

## Prerequisites

- Node.js (v20 or later)
- npm (v9 or later)
- Access to the Brighte Eats GraphQL API

## Installation

1. Clone the repository:

```bash
git clone https://github.com/kel-flrs/brighte-tucker-graphql-ui.git
cd brighte-tucker-graphql-ui
```

2. Install dependencies:

```bash
npm install --force
```

3. Configure environment variables by creating a `.env` file in the root directory:

```
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:3000/graphql
```
4. Make sure that Brighte Eats GraphQL API is already up and running at [http://localhost:3000](http://localhost:3000)

5. Start the development server:

```bash
npm run dev
```

6. Access the application at [http://localhost:3001](http://localhost:3001) (since our GraphQL API is running on port 3000)

## Project Structure

```
brighte-tucker-graphql-ui/
├── src/
│     app/
│     ├── components/       # Reusable UI components
│     ├── dashboard/        # Dashboard pages and components
│     │   └── lead/         # Lead detail pages
│     ├── lib/              # Utility functions and API clients
│     └── page.tsx          # Home page with registration form
├── public/                 # Static assets
├── .env                    # Environment variables (create this file)
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Features

### Expression of Interest Form

- User-friendly form for capturing customer details
- Real-time form validation with clear error messages
- Service selection via checkboxes (delivery, pick-up, payment)
- Success confirmation with option to submit another entry

### Administrative Dashboard

- Comprehensive table view of all customer leads
- Sortable and scannable display of lead information
- Quick access to detailed information for each lead
- Responsive design for desktop and mobile use

### Lead Detail View

- Detailed view of individual lead information
- Complete customer profile including contact details
- Visual indicators for selected services
- Easy navigation back to the main dashboard

## GraphQL API Integration

The frontend integrates with a GraphQL API using Apollo Client. The key GraphQL operations include:

### Mutations

- `RegisterLead`: Submits customer expression of interest

### Queries

- `GetLeads`: Retrieves all customer leads
- `GetLead`: Retrieves a specific lead by ID

## Styling and Design

The application follows a modern design approach utilizing Brighte's brand colors:

- Primary: #00C28C
- Secondary: #00A87B
- Background: #FFFFFF

The UI components are built with accessibility in mind, featuring:

- Proper color contrast
- Clear visual hierarchy
- Responsive layouts for all device sizes
- Intuitive navigation patterns

#### API Connection Issues

If the application cannot connect to the GraphQL API, verify:

1. The API is running and accessible
2. The `NEXT_PUBLIC_GRAPHQL_URL` environment variable is correctly set
3. There are no network restrictions blocking API access
