import userModel from '../models/user.model.js';



export const createUser = async ({email, password}) => {//--> this function is used to create a new user

    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        email,
        password: hashedPassword
    });

    return user;

}

export const getAllUsers = async ({ userId }) => {//--> this function is used to get all users except the current user
    const users = await userModel.find({
        _id: { $ne: userId }
    });
    return users;
}