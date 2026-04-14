import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'Backend is running' });
});

app.use('/api/auth', authRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
