import { IUser, User } from '../models/userModel';
import { signToken } from '../utils/jwtUtils';
import bcrypt from 'bcryptjs';

export const registerUser = async (username: string, email: string, password: string) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('User already exists');
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    const newUser = user as IUser & { _id: string; role: string };
    return signToken(newUser._id, newUser.role);
};  

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid credentials');
    }

    const isUser = user as IUser & { _id: string; role: string };
    return signToken(isUser._id, isUser.role);
};
