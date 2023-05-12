
import mongoose from 'mongoose';
import app from './app'



const port:number = 4000;



//TODO: test database connection
async function bootstrap() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practise-mongoose');
    console.log(`🔋 Mongodb Database is connedted`);

    app.listen(port, () => {
      console.log(`⚡ Server is listening on port ${port}`)
    })


  } catch (error) {
    console.log(`Failed to connect mongodb`, error)
  }

}

bootstrap()




