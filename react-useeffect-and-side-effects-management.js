import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Side effect: Fetching user data
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Cleanup function
    return () => {
      // Cancel any pending requests or subscriptions
    };
  }, [userId]); // Dependency array

  useEffect(() => {
    // Side effect: Updating document title
    document.title = user ? `${user.name}'s Profile` : 'Loading...';
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
