import mongoose from 'mongoose';
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbServerUrl = process.env.DB_SERVER_URL ?? 'mongodb://127.0.0.1:27017/todo';
let connectionStringPrefix = "";
if(dbUsername && dbPassword) {
    connectionStringPrefix = `${dbUsername}:${dbPassword}@`;
}
let mongodbConnectionString;
if(connectionStringPrefix) {
    console.log('connecting using env variables');
    mongodbConnectionString = `mongodb+srv://${connectionStringPrefix}${dbServerUrl}`
}else {
    mongodbConnectionString = dbServerUrl;
}
async function connect() {
    await mongoose.connect(mongodbConnectionString);
}

connect().then(() => {
    console.log('DB connected');
})
.catch((err) => {
    console.log('DB failed to connect', err);
    process.exit();
})
