import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';
// import { JwtPayload } from 'jsonwebtoken';

interface JwtPayload {
    id: string;
    role: string;
  }

  
export const protect = (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    
    if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
    }
    
    try {
        const decoded = verifyToken(token) as JwtPayload;
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token verification failed' });
    }
};

export const restrictTo = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'You do not have permission' });
        }
        next();
    };
};
