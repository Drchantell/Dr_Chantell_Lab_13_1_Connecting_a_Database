# Lab 13.1: Connecting a Database

I built a small Node.js and Express application that connects to MongoDB Atlas. This is the starting point for a social media API. My application has one GET route at `/`. It returns a success message when MongoDB responds and a 500 error message when the connection fails. This lab checks the connection; it does not create users, posts, or collections.

I used Express to create my server, MongoClient to connect to MongoDB, and dotenv to load my private connection string. I kept the code simple so I can follow what each part does. The response is JSON, so this assignment does not need HTML, CSS, or React.

## How I run my project

I open the extracted project folder in VS Code and run `npm install` in the terminal. I copy `.env.example` to a new file named `.env`, replace the sample URI with my Atlas connection string, and save it. Then I run `node server.js` and visit http://localhost:3001/.

```json
{ "message": "Successfully connected to the database!" }
```

If the database cannot connect, my route returns HTTP 500 with this response:

```json
{ "message": "Failed to connect to the database." }
```

I keep `.env` and `node_modules` out of GitHub with `.gitignore`. My `.env.example` contains placeholders so someone else can set up their own connection. I include `package-lock.json` so the dependency versions can be reproduced.

## What I am learning

I am learning that starting an Express server and connecting to a database are separate steps. Seeing the server address in the terminal does not prove the database connected. Opening the route runs the connection check. I use `await` because the database needs time to respond, and I use `try/catch` to return a useful error response if something goes wrong.

One challenge I may encounter is using the wrong database password or forgetting to allow my IP address in Atlas. Another is saving the connection string under a different variable name. I can work through these problems by checking one setting at a time without sharing my password.

## Setup and verification status

The project includes the application code and setup instructions. My personal Atlas project, user permissions, network settings, and successful live database connection must still be verified before submission. This exercise uses a free cluster and broad network access as instructed; a production deployment needs more restrictive access and operational planning.

## References

- [MongoDB Node.js connection guide](https://www.mongodb.com/docs/drivers/node/current/connect/)
- [MongoDB connection targets and ping example](https://www.mongodb.com/docs/drivers/node/current/connect/connection-targets/)
