
//todo: calling pattern
/* 
    Route calling --> controller calling -->service
*/

import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

//todo: create all user controller


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {

    const user = await getUsersFromDB();
    res.status(200).json({
        status: "success",
        data: user,
    })

}



//todo: create user post
export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const data =req.body

    const user = await createUserToDB(data);
    res.status(200).json({
        status: "success",
        data: user,
    })

}


//todo: create single user get controller

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {

    //receive the id from request.params
    const {id}=req.params;

    const user = await getUserByIdFromDB(id);
    res.status(200).json({
        status: "success",
        data: user,
    })

}