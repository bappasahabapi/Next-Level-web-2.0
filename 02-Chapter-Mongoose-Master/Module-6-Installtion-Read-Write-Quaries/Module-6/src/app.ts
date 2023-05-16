import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req: Request, res: Response, next: NextFunction) => {

    //todo: Inserting a test data into mongodb(four steps)

    // 1. creating Interface


    //2. creating schema using interface


    //3. Creating Models
 

    //4. Database query on model
    const createUserToDB = async () => {
        const user = new User({
            id: '4',
            role: "student",
            password: 'secret4',
            name: {
                firstName: 'papi4',
                middleName: 'saha',
                lastName: 'bapi3',
            },
            dateOfBirth: '11/11/1997',
            gender: "male",
            email: 'bapap@gmail.com',
            contanctNo: '01333',
            emergencyContactNo: '02333',
            presentAdddress: 'Thakaugaon',
            permanenetAddress: 'Dhaka'
        });
        await user.save();
        console.log(user)
    };

    createUserToDB();




    res.send('Server is working ...');
//   next();

});


export default app;