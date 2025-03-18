import React from 'react';

const users = [
  { userId: '23000xxxxx', category: 'Student' },
  { userId: '45000yyyyy', category: 'Professional' }
];

const User = () => {
  const tableStyles = {
    width: '50%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'left',
    padding: '10px',
  };

  const cellStyles = {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const rowHoverStyles = {
    backgroundColor: '#f1f1f1',
  };

  const categoryStyles = {
    student: { color: '#007BFF', fontWeight: 'bold' },
    professional: { color: '#28A745', fontWeight: 'bold' },
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333', margin: '20px 0' }}>User List</h1>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={headerStyles}>User ID</th>
            <th style={headerStyles}>Category</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.userId}
              style={index % 2 === 0 ? rowHoverStyles : null}
            >
              <td style={cellStyles}>{user.userId}</td>
              <td
                style={{
                  ...cellStyles,
                  ...(user.category === 'Student'
                    ? categoryStyles.student
                    : categoryStyles.professional),
                }}
              >
                {user.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
