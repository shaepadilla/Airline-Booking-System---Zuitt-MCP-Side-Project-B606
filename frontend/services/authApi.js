const API_URL = process.env.NEXT_PUBLIC_API_URL;

const request = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
};

export const register = (payload) =>
  request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

export const login = (payload) =>
  request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

export const getCurrentUser = (token) =>
  request('/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
