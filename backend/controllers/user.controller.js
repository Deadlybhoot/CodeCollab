import userModel from '../models/user.model.js';
import * as userService from '../services/user.service.js';
import { validationResult } from 'express-validator';
import redisClient from '../services/redis.service.js';


// How the Flow Works:
// Client sends a request to create a new user (e.g., with name, email, password).
// The input is validated.
// If valid:
// A new user is created in the database.
// A JWT is generated for the user.
// Sensitive data like passwords are removed.
// A success response is sent back to the client with the user details and token.
// If something goes wrong, an error response is returned.


export const createUserController = async (req, res) => {//--> this function is used to create a new user

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const user = await userService.createUser(req.body);

        const token = await user.generateJWT();

        delete user._doc.password; //--> this is used to remove the password from the user object

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


// Example of a Full Flow
// The user sends a POST request to /login with their email and password.
// Backend:
// Checks the input.
// Looks up the user in the database.
// Verifies the password.
// Generates a token and responds with the user info (without the password).
// If any step fails, an error message is returned.


export const loginController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select('+password');//--> this is used to find the user by email

        if (!user) {
            return res.status(401).json({
                errors: 'Invalid credentials'
            })
        }

        const isMatch = await user.isValidPassword(password);

        if (!isMatch) {
            return res.status(401).json({
                errors: 'Invalid credentials'
            })
        }

        const token = await user.generateJWT();

        delete user._doc.password;

        res.status(200).json({ user, token });


    } catch (err) {

        console.log(err);

        res.status(400).send(err.message);
    }
}

export const profileController = async (req, res) => {//--> this function is used to get the profile of the user

    res.status(200).json({
        user: req.user
    });

}

// Flow Summary
// The function checks where the token is stored (cookies or headers) and retrieves it.
// It marks the token as invalid by saving it in Redis for 24 hours.
// Sends a confirmation response to the client that they are logged out.
// If something goes wrong, it logs the error and notifies the client with a failure message.

export const logoutController = async (req, res) => {
    try {

        const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

        redisClient.set(token, 'logout', 'EX', 60 * 60 * 24);

        res.status(200).json({
            message: 'Logged out successfully'
        });


    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}

export const getAllUsersController = async (req, res) => {//--> this function is used to get all the users
    try {

        const loggedInUser = await userModel.findOne({
            email: req.user.email
        })

        const allUsers = await userService.getAllUsers({ userId: loggedInUser._id });

        return res.status(200).json({
            users: allUsers
        })

    } catch (err) {

        console.log(err)

        res.status(400).json({ error: err.message })

    }
}
