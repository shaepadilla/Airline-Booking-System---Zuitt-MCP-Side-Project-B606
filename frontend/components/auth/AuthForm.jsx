'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login, register } from '../../services/authApi';
import { saveSession } from '../../store/authStore';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export default function AuthForm({ mode }) {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isLogin = mode === 'login';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = isLogin
        ? { email: form.email, password: form.password }
        : form;

      const response = isLogin ? await login(payload) : await register(payload);
      saveSession(response.data.token, response.data.user);
      router.push('/');
      router.refresh();
    } catch (err) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <div className="card formCard">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        <p>{isLogin ? 'Sign in to continue.' : 'Create a new account.'}</p>
        <form onSubmit={handleSubmit} className="form">
          {!isLogin && (
            <>
              <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} required />
              <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} required />
            </>
          )}
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required minLength={6} />
          {error ? <p className="error">{error}</p> : null}
          <button className="button" type="submit" disabled={loading}>
            {loading ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="switchText">
          {isLogin ? 'No account yet?' : 'Already have an account?'}{' '}
          <Link href={isLogin ? '/register' : '/login'}>
            {isLogin ? 'Register' : 'Login'}
          </Link>
        </p>
      </div>
    </main>
  );
}
