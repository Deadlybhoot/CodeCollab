import projectModel from '../models/project.model.js';
import * as projectService from '../services/project.service.js';
import userModel from '../models/user.model.js';
import { validationResult } from 'express-validator';

// Complete Flow
// Validate the incoming data (name).
// If validation fails, respond with an error (e.g., missing or invalid fields).
// Extract the name of the project from the request body.
// Identify the logged-in user using their email (req.user.email).
// Create a new project associated with the logged-in user.
// Send the created project back as a response.
// If anything goes wrong, catch the error, log it, and send an error response.
export const createProject = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { name } = req.body;
        const loggedInUser = await userModel.findOne({ email: req.user.email });
        const userId = loggedInUser._id;

        const newProject = await projectService.createProject({ name, userId });

        res.status(201).json(newProject);

    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }


}

export const getAllProject = async (req, res) => {//--> this function is used to get all projects of the logged in user
    try {

        const loggedInUser = await userModel.findOne({
            email: req.user.email
        })

        const allUserProjects = await projectService.getAllProjectByUserId({
            userId: loggedInUser._id
        })

        return res.status(200).json({
            projects: allUserProjects
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}

export const addUserToProject = async (req, res) => {//--> this function is used to add users to a project
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { projectId, users } = req.body

        const loggedInUser = await userModel.findOne({
            email: req.user.email
        })


        const project = await projectService.addUsersToProject({
            projectId,
            users,
            userId: loggedInUser._id
        })

        return res.status(200).json({
            project,
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }


}

export const getProjectById = async (req, res) => {

    const { projectId } = req.params;

    try {

        const project = await projectService.getProjectById({ projectId });

        return res.status(200).json({
            project
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }

}

export const updateFileTree = async (req, res) => {//--> this function is used to update the file tree of a project
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { projectId, fileTree } = req.body;

        const project = await projectService.updateFileTree({
            projectId,
            fileTree
        })

        return res.status(200).json({
            project
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }

}