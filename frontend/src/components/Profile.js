import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Avatar, TextField, IconButton } from '@mui/material';
import { Logout, Edit, Save } from '@mui/icons-material';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editable, setEditable] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await axios.get('http://localhost:5000/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
        setEditedUser({ name: res.data.name });
      } catch (err) {
        console.error('Failed to fetch user profile:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const getBlankHumanIcon = () =>
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'; // Blank human icon

  const handleEditToggle = () => {
    setEditable(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/login';
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    try {
      const res = await axios.put(
        'http://localhost:5000/api/users/me',
        { name: editedUser.name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('Response from server:', res.data); // 👈 log for debugging
  
      // Safely check if user data is returned
      if (res.data && res.data.name && res.data.email) {
        setUser({
          name: res.data.name,
          email: res.data.email,
        });
        setEditedUser({ name: res.data.name });
        setEditable(false);
      }      
    } catch (err) {
      console.error('Failed to save user profile:', err);
    }
  };
  

  return (
    <div style={styles.container}>
      {loading ? (
        <p style={{ color: '#232F3E', fontSize: '1.2rem' }}>Loading profile...</p>
      ) : user ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.card}
        >
          <Avatar
            src={getBlankHumanIcon()}
            alt="Profile"
            sx={{ width: 100, height: 100, margin: 'auto' }}
          />

          {/* Editable Name Field */}
          {editable ? (
            <TextField
              label="Name"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              fullWidth
              sx={{ marginTop: 2 }}
            />
          ) : (
            <>
              <h2 style={styles.name}>{user.name}</h2>
              <p style={styles.email}>{user.email}</p>
            </>
          )}

          <div style={styles.actions}>
            {editable ? (
              <IconButton onClick={handleSave} color="primary">
                <Save />
              </IconButton>
            ) : (
              <IconButton onClick={handleEditToggle} color="primary">
                <Edit />
              </IconButton>
            )}

            <IconButton onClick={handleLogout} color="error">
              <Logout />
            </IconButton>
          </div>
        </motion.div>
      ) : (
        <p style={{ color: '#232F3E', fontSize: '1.2rem' }}>Profile not found.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    backgroundColor: '#F3F4F6',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '30px 40px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    minWidth: '300px',
    position: 'relative',
  },
  name: {
    marginTop: '15px',
    fontSize: '1.8rem',
    color: '#232F3E', // Amazon dark blue
  },
  email: {
    fontSize: '1rem',
    color: '#37475A', // Amazon text gray
    marginTop: '5px',
  },
  actions: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
  },
};

export default Profile;
