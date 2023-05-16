import express from 'express'
import mongoose from 'mongoose';
// const express = require('express')

const app = express();
const port = 4000;

//TODO: test database connection
async function bootstrap() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practise-mongoose');
    console.log(`🔋 Mongodb Database is connedted`)
  } catch (error) {
    console.log(`Failed to connect mongodb`,error)
  }

}

bootstrap()

app.listen(port, () => {
  console.log(`🟢 Server is listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

