# Destiny Travels – Destination Management API

## Project Overview
Destiny Travels is a RESTful API developed using Node.js, Express.js, MongoDB, and Mongoose. It helps manage travel destinations by providing operations to add, retrieve, update, search, and delete destination records.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- JavaScript

## Project Structure
```text
Destiny Travels/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── destinationController.js
│
├── models/
│   └── Destination.js
│
├── routes/
│   └── destinationRoutes.js
│
├── .env
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Features

### 1. Add Destinations
- Add a single destination using `create()`.
- Add multiple destinations using `insertMany()`.

### 2. Retrieve Destinations
- Retrieve all destinations using `find()`.
- Retrieve a destination by ID using `findById()`.
- Retrieve a destination by name using `findOne()`.

### 3. Update Destinations
- Update a destination by ID using `findByIdAndUpdate()`.
- Update a destination by name using `findOneAndUpdate()`.

### 4. Smart Destination Discovery
- Filter destinations by category and price range.
- Sort destinations by price, rating, or name.
- Implement pagination using `skip()` and `limit()`.
- Retrieve unique categories using `distinct()`.
- Count destination records using `countDocuments()`.

### 5. Destination Cleanup
- Delete a destination by ID.
- Delete a destination by name.
- Delete multiple destinations using `deleteMany()`.

## Database Details
- Database Name: `destiny_travels`
- Collection Name: `destinations`

## Installation and Setup

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root and configure:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

5. Start the development server:

```bash
npm run dev
```

The server runs on:

`http://localhost:5000`

## API Testing
All API operations are tested using Postman. MongoDB Atlas is used to verify the stored destination records.

## Conclusion
The Destiny Travels API demonstrates CRUD operations and various Mongoose methods for managing travel destination data. It provides a structured backend application using the MVC architecture.

## Author
Developed as an academic project.
