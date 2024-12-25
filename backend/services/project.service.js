import projectModel from '../models/project.model.js';
import mongoose from 'mongoose';




// Flow Summary
// Check if the name and userId are provided.
// Attempt to create a project in the database using projectModel.create.
// Handle duplicate name errors (code 11000).
// Return the project details if everything succeeds.



export const createProject = async ({name, userId}) => {
    if (!name) {
        throw new Error('Name is required')
    }
    if (!userId) {
        throw new Error('UserId is required')
    }

    let project;
    try {
        project = await projectModel.create({
            name,
            users: [ userId ]
        });
    } catch (error) {
        if (error.code === 11000) {
            throw new Error('Project name already exists');
        }
        throw error;
    }

    return project;

}


export const getAllProjectByUserId = async ({ userId }) => {//--> this function is used to get all projects by userId
    if (!userId) {
        throw new Error('UserId is required')
    }

    const allUserProjects = await projectModel.find({
        users: userId
    })

    return allUserProjects
}


// How It Works in Real Life:
// Input Data:

// projectId: ID of the project you want to update.
// users: Array of user IDs you want to add.
// userId: ID of the user performing this action.
// Validation:

// Check that all IDs are provided and valid.
// Ensure the acting user (userId) is part of the project.
// Update the Database:

// Add the new users to the project if they aren't already in the users array.
// Return the Updated Project:

// The function returns the project object with the updated list of users.


export const addUsersToProject = async ({ projectId, users, userId }) => {

    if (!projectId) {
        throw new Error("projectId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }

    if (!users) {
        throw new Error("users are required")
    }

    if (!Array.isArray(users) || users.some(userId => !mongoose.Types.ObjectId.isValid(userId))) {
        throw new Error("Invalid userId(s) in users array")
    }

    if (!userId) {
        throw new Error("userId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid userId")
    }


    const project = await projectModel.findOne({
        _id: projectId,
        users: userId
    })

    console.log(project)

    if (!project) {
        throw new Error("User not belong to this project")
    }

    const updatedProject = await projectModel.findOneAndUpdate({
        _id: projectId
    }, {
        $addToSet: {
            users: {
                $each: users
            }
        }
    }, {
        new: true
    })

    return updatedProject



}
// 4. Summary of the Flow
// Check Input:
// Ensure the projectId is provided and is valid.
// Query the Database:
// Search for a project in the database by its unique ID.
// Include user details in the result using .populate().
// Return the Result:
// Send back the project details.

// .populate('users'):

// What is Populating?
// Populating means replacing a reference (e.g., user IDs) in the project document with the actual user details from the users collection.
// The field users in the project is replaced with full user details instead of just IDs.

export const getProjectById = async ({ projectId }) => {
    if (!projectId) {
        throw new Error("projectId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }

    const project = await projectModel.findOne({
        _id: projectId
    }).populate('users')

    return project;
}


// Function Overview
// This function updates the file structure (fileTree) of a project in a database. It:

// Validates the inputs.
// Searches for the project by its projectId.
// Updates the fileTree of the project.
// Returns the updated project details.



export const updateFileTree = async ({ projectId, fileTree }) => {
    if (!projectId) {
        throw new Error("projectId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }

    if (!fileTree) {
        throw new Error("fileTree is required")
    }

    const project = await projectModel.findOneAndUpdate({
        _id: projectId
    }, {
        fileTree
    }, {
        new: true
    })

    return project;
}