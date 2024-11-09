import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/', () => {
    console.log("Hello Docker")
})

export default app;
