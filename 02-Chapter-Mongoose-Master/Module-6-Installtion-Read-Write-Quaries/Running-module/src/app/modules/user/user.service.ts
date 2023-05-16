// here we fetch the database logic from app.ts part

import { IUser } from "./user.interface";
import User from "./user.model";

//todo: get all users from database
export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();  
    return users;
}


//todo: post or create user using postman
export const createUserToDB = async (payload: IUser): Promise<IUser> => {

    const user = new User(payload) //user is instance of class User
    await user.save();  // user.save() -> instance.method = instance method ->(build in method in mongooes)
    return user;
};

//todo: get single user from database
export const getUserByIdFromDB=async(payload:string):Promise<IUser|null> =>{
    const user = await User.findOne({id:payload},{name:1,email:1});
    // const user = await User.findOne({id:payload};
    return user;

}



// {
//     "id":"001",
//     "role":"admin",
//     "password":"new",
//     "name":{
//        "firstName":"onetwo4",
//        "middleName":"saha",
//        "lastName":"bapi3"
//     },
//     "dateOfBirth":"11/11/1997",
//     "gender":"male",
//     "email":"one@gmail.com",
//     "contanctNo":"01333",
//     "emergencyContactNo":"02333",
//     "presentAdddress":"Thakaugaon",
//     "permanenetAddress":"Dhaka"
//  }
