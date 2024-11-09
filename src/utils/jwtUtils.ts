import jwt from 'jsonwebtoken';

export const signToken = (userId: string, role: string) => {
    return jwt.sign({ id: userId, role }, process.env.JWT_SECRET!, {
        expiresIn: '1d',
    });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET!);
};
