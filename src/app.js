import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js'; 
import taskRoutes from './routes/tasks.js'; 
import { config } from 'dotenv';

config(); 
connectDB(); 

const app = express();

app.use(express.json());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

export default app;
