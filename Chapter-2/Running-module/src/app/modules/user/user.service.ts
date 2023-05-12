// here we fetch the database logic from app.ts part

import User from "./user.model";

export const createUserToDB = async () => {
    const user = await new User({
        id: '44523',
        role: "student",
        password: 'secret4',
        name: {
            firstName: 'onetwo4',
            middleName: 'saha',
            lastName: 'bapi3',
        },
        dateOfBirth: '11/11/1997',
        gender: "male",
        email: 'one@gmail.com',
        contanctNo: '01333',
        emergencyContactNo: '02333',
        presentAdddress: 'Thakaugaon',
        permanenetAddress: 'Dhaka'
    });
    await user.save();
    console.log(user);

    return user
};