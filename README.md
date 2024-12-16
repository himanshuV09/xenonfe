
# Luxury Estate 

## Overview
This project is a luxury estate information platform that allows users to explore a variety of high-end properties available for sale or rent. The platform includes features like user authentication, detailed property listings, and AI-driven property recommendations. It is built with a ReactJS frontend, a Node.js/Express.js backend, and a MongoDB database.

## Features
- **User Authentication**: Secure login and logout functionality using JWT tokens.
- **Property Listings**: Users can browse and search through luxury properties, with data fetched from a MongoDB database.
- **Responsive Design**: A fully responsive layout that adapts to desktop, tablet, and mobile screens.

## Technologies Used
- **Frontend**:  
  - ReactJS  
  - Tailwind CSS  

- **Backend**:  
  - Node.js  
  - Express.js  

- **Database**:  
  - MongoDB (hosted on MongoDB Atlas)

## Installation

1. **Clone the Repositories**:

   - **Frontend**:
     ```bash
     git clone https://github.com/himanshuV09/xenonfe
     cd xenonfe
     ```

   - **Backend**:
     ```bash
     git clone https://github.com/himanshuV09/xenonbe
     cd xenonbe
     ```

2. **Install Dependencies**:

   - **Backend**:
     ```bash
     npm install
     ```
     
   - **Frontend**:
     ```bash
     npm install
     ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the backend directory with the following values:
   
   ```env
   MONGO_URI=<your-mongodb-atlas-uri>
   PORT=<PORT_NUMBER>
   JWT_SECRET=<your-secret-key>
   ```

4. **Start the Development Servers**:

   - **Backend**:
     ```bash
     npm start
     ```
     
   - **Frontend**:
     ```bash
     npm start
     ```

## Deployment

The platform is live and can be accessed at:  
[Luxury Estate Platform](https://xenonfe.vercel.app/)


# xenostackFE
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> b56b190 (Initial commit)
