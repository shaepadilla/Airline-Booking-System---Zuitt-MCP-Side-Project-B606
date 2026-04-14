import jwt from 'jsonwebtoken';

export const requireAuth = (req, _res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      const error = new Error('Missing or invalid authorization header');
      error.statusCode = 401;
      throw error;
    }

    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    error.statusCode = 401;
    next(error);
  }
};
