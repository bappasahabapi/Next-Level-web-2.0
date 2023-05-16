import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        firstName: {
            type: String,
            require: true
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            require: true
        },
    },
    dateOfBirth: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email: {
        type: String,
    },
    contanctNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },

    presentAdddress: {
        type: String,
        required: true
    },
    permanenetAddress: {
        type: String,
        required: true
    },


});

const User = model<IUser>("User", userSchema);

export default User;