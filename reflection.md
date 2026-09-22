# My Lab 13.1 Reflection

## Why should I whitelist IP addresses?

I whitelist IP addresses to control which devices can try to connect to my database. Using `0.0.0.0/0` allows connections from anywhere, so I would use a limited IP address for a real production application.

## What does dotenv do?

I use dotenv to load my MongoDB connection string from my `.env` file. This keeps my username, password, and connection string out of my JavaScript code and GitHub.

## How would I fix a failed connection?

I would check that my `.env` file is in the correct folder and that the variable is named `MONGO_URI`. I would also check my database username, password, connection string, cluster status, and Atlas network access. After making changes, I would restart the server and try again.

## What was challenging?

The most difficult part was learning that my Atlas sign-in and database user are different. I also learned that starting the Express server does not automatically mean MongoDB connected. This lab helped me understand how the server, environment variables, and database work together.

**Author:** Dr. Chantell McDowell, Per Scholas student
