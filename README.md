# Lab 13.1: Connecting a Database

In this lab, I created a simple Node.js and Express server that connects to MongoDB Atlas. I used the MongoDB driver to test the connection and dotenv to keep my connection string in a private `.env` file.

When I visit `http://localhost:3001/`, the app checks the database connection. If it works, I see:

```json
{ "message": "Successfully connected to the database!" }
```

## How to run my project

1. Run `npm install`.
2. Copy `.env.example` and rename the copy `.env`.
3. Add my MongoDB Atlas connection string to `.env`.
4. Run `npm start`.
5. Open `http://localhost:3001/`.

I used `.gitignore` to keep my `.env` file and password off GitHub.

## What I learned

I learned how to connect an Express app to MongoDB Atlas and protect private information with environment variables. I also learned that the server can start even when the database is not connected. Opening the route confirms whether MongoDB is responding.

## Challenge

My biggest challenge was understanding the difference between my Atlas account password and my database user password. I also had to check my connection string and network access settings. Working through each setting one at a time helped me understand how the connection works.

**Author:** Dr. Chantell McDowell, Per Scholas student
