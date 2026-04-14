'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../services/authApi';
import { clearSession, getToken } from '../store/authStore';

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }

    getCurrentUser(token)
      .then((response) => setUser(response.data.user))
      .catch(() => clearSession())
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="page">
      <div className="card">
        <h1>AIRBOOK Local Starter</h1>
        <p>Blank repo starter with frontend and backend authentication only.</p>
        {loading ? (
          <p>Loading session...</p>
        ) : user ? (
          <div>
            <p>Welcome, {user.firstName} {user.lastName}</p>
            <p>{user.email}</p>
            <button className="button secondary" onClick={() => { clearSession(); window.location.reload(); }}>
              Logout
            </button>
          </div>
        ) : (
          <div className="actions">
            <Link className="button" href="/login">Login</Link>
            <Link className="button secondary" href="/register">Register</Link>
          </div>
        )}
      </div>
    </main>
  );
}
