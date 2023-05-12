// here we fetch the database logic from app.ts part

import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload:IUser):Promise<IUser> => {
    // const user = await new User({
    //     id: '44523',
    //     role: "student",
    //     password: 'secret4',
    //     name: {
    //         firstName: 'onetwo4',
    //         middleName: 'saha',
    //         lastName: 'bapi3',
    //     },
    //     dateOfBirth: '11/11/1997',
    //     gender: "male",
    //     email: 'one@gmail.com',
    //     contanctNo: '01333',
    //     emergencyContactNo: '02333',
    //     presentAdddress: 'Thakaugaon',
    //     permanenetAddress: 'Dhaka'
    // });

    const user =new User(payload)
    await user.save();
    // console.log(user);

    return user;
};

export const getUsersFromDB=async():Promise<IUser[]> =>{
    const users =await User.find();
    return users;
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
 