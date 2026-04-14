import { getCurrentUser, loginUser, registerUser } from '../services/auth.service.js';

export const register = async (req, res, next) => {
  try {
    const result = await registerUser(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const me = async (req, res, next) => {
  try {
    const user = await getCurrentUser(req.user.sub);
    res.json({ success: true, data: { user } });
  } catch (error) {
    next(error);
  }
};
