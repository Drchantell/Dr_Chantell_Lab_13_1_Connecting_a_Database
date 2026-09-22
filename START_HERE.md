# Start here: Dr. Chantell's Lab 13.1

## 1. Set up Atlas

1. Sign in at https://www.mongodb.com/cloud/atlas.
2. Create a project named `Lab 13.1 Social Media API` in your organization.
3. Create a free M0 cluster. Avoid selecting a paid tier for this lab.
4. In Database Access, add a database user with a strong, unique password. Select **Read and write to any database**, as the assignment requests.
5. In Network Access, add `0.0.0.0/0` for this exercise. For production, restrict access to the application's IP addresses.
6. On your deployed cluster, select **Connect**, then **Drivers**, then Node.js. Copy the connection string.

If you already have a cluster, check with your instructor whether it meets the requirement to create a new project. Do not delete your existing databases.

## 2. Open the project

Extract the ZIP, open the enclosed folder in VS Code, and select Terminal > New Terminal. Run:

```bash
npm install
```

Copy `.env.example` in VS Code and name the copy `.env`. Paste your Atlas connection string as the value of `MONGO_URI`:

```dotenv
MONGO_URI="your_actual_atlas_connection_string"
```

Replace the password placeholder locally with your database user's password. Do not leave angle brackets around it. URL-encode special characters in the password portion, such as `@` as `%40`. Keep the rest of the connection string intact. Never upload `.env` or paste its contents into a public message. If a password has already been shared, change it in Atlas before using it again.

## 3. Run the server

```bash
node server.js
```

Open http://localhost:3001/ in your browser. A successful connection displays:

```json
{ "message": "Successfully connected to the database!" }
```

In Postman, use GET with the same URL. Success should return HTTP 200. A failed database connection should return HTTP 500 and `{ "message": "Failed to connect to the database." }`.

The terminal's startup message only confirms Express is listening. The browser's success response confirms the database answered. Stop the server with Control+C. Restart it after editing `.env`.

## 4. Troubleshoot

- Missing module: run `npm install` inside the folder containing `package.json`.
- Authentication problem: check the database user's credentials, not your Atlas sign-in password.
- Timeout: check Atlas Network Access, your internet connection, and cluster availability.
- Invalid URI: copy the Drivers connection string again and replace all placeholders.
- Port already in use: stop the other application using port 3001 and retry.

## 5. Submit to GitHub

Create an empty GitHub repository named `Dr_Chantell_Lab_13_1_Connecting_a_Database`. Do not initialize it with a README if you plan to use the commands below.

Run these commands in your project folder:

```bash
git init
git add .
git status
```

Check that `.env` and `node_modules` are NOT listed for commit. `.env.example` should be listed because it contains only placeholders. Then run:

```bash
git commit -m "Complete Lab 13.1 database connection project"
git branch -M main
git remote add origin https://github.com/Drchantell/Dr_Chantell_Lab_13_1_Connecting_a_Database.git
git push -u origin main
```

These commands assume that you created the repository under `Drchantell` and are authenticated with GitHub. Submit the actual repository page link after the push succeeds. Verify your live Atlas connection first; project code alone does not prove all Atlas setup requirements are complete.
