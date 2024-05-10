# todo-mern
A Todo app written with React.js, ant.design, tailwind used for frontend and Express.js, MongoDB, mongoose used for the backend.

## Features

| feature | frontend | backend
|---------|---------|---------|
|add todo| yes |yes |
|todo details page| yes |yes |
|list todos|yes|yes|
|update todo|yes|yes|
|delete todo|yes|yes|
|filter by status|yes|yes|
|form validation|yes|yes|
|responsive UI|yes|NA|
|Error Boundary UI| yes | NA |



## Setup Guidelines

The frontend and backend of the `todo-mern` app are seggregated with `frontend` and `server` folders.

### Server setup

You'll first need to install Node.js and ensure access to MongoDB instance. This app is tested and developed on the following versions.

|Tools|Version|
|-|-|
|Node.js| 16.20.1|
|pnpm|8.15.3|
|MongoDB|7.0.8|

Next, we need to setup the database for use by the backend.
There're two ways to connect to the database.
1. The db setup script supports connecting to local MongoDB instance by default. If you've installed MongoDB locally, you can just start the server by invoking `mongosh`
2. If you are using remotely hosted MongoDB instance like MongoDB Atlas, ensure to have MongoDB connection string handy. Next, you can create a fresh `.env` file inside `server` folder and specifying the following properties where your connection string is in the format `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_SERVER_URL}`
    - DB_USERNAME
    - DB_PASSWORD
    - DB_SERVER_URL

Next, we can install npm deps and run the server in dev mode
```bash
    cd server
    pnpm install
    pnpm dev
```


### frontend setup
Frontend setup is pretty straightforward!
```sh
    cd frontend
    pnpm install
    pnpm dev
```
