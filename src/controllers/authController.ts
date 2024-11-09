import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/authServices';

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const token = await registerUser(username, email, password);
        res.status(201).json({ token });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    };
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const token = await loginUser(email, password);
        res.status(200).json({ token });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
}
