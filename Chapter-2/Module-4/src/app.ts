import express, { Application,Request,Response,NextFunction } from 'express';
import cors from 'cors';
import { Schema } from 'mongoose';

const app:Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', (req:Request, res:Response , next:NextFunction) => {

    //todo: Inserting a test data into mongodb(four steps)

    // 1. creating Interface
    interface IUser{
        id:string;
        role:"student";
        password:string;
        name:{
            firstName:string;
            middleName?:string;
            lastName:string;
        };
        dateOfBirth?:string;
        gender: "male | female ";
        email?: string;
        contanctNo:string;
        emergencyContactNo:string;
        presentAdddress:string;
        permanenetAddress:string;
    }

    //2. creating schema using interface
    const userSchema = new Schema<IUser>({
        id:{
            type:String,
            required:true,
            unique:true
        },
        role:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        name:{
            firstName:{
                type:String,
                require:true
            },
            middleName:{
                type:String,
            },
            lastName:{
                type:String,
                require:true
            },
        },
        dateOfBirth:{
            type:String,
            require:true
        },
        gender:{
            type:String,
            enum:['male','female']
        },
        email:{
            type:String,
        },
        contanctNo:{
            type:String,
            required:true
        },
        emergencyContactNo:{
            type:String,
            required:true
        },
 
        presentAdddress:{
            type:String,
            required:true
        },
        permanenetAddress:{
            type:String,
            required:true
        },


    });



//res.send('Hello World!');
//   next();


});


export default app;