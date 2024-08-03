import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || {});

  const handleEditClick = () => setIsEditing(true);

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsEditing(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-icon">
        <FontAwesomeIcon icon={faUser} size="3x" />
      </div>
      <div className="profile-details">
        <form className="profile-form">
          <div className="form-group">
            <label>Name:</label>
            <p>{user.name}</p>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <p>{user.email}</p>
          </div>
          <div className="form-group">
            <label>Phone:</label>
            {isEditing ? (
              <input
                type="text"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            ) : (
              <p>{user.phone || 'N/A'}</p>
            )}
            <FontAwesomeIcon
              icon={faEdit}
              size="sm"
              className="edit-icon"
              onClick={isEditing ? handleSave : handleEditClick}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            {isEditing ? (
              <input
                type="text"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            ) : (
              <p>{user.address || 'N/A'}</p>
            )}
            <FontAwesomeIcon
              icon={faEdit}
              size="sm"
              className="edit-icon"
              onClick={isEditing ? handleSave : handleEditClick}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            {isEditing ? (
              <input
                type="date"
                value={user.dob}
                onChange={(e) => setUser({ ...user, dob: e.target.value })}
              />
            ) : (
              <p>{user.dob || 'N/A'}</p>
            )}
            <FontAwesomeIcon
              icon={faEdit}
              size="sm"
              className="edit-icon"
              onClick={isEditing ? handleSave : handleEditClick}
            />
          </div>
          <div className="form-group">
            <label>Class:</label>
            {isEditing ? (
              <input
                type="text"
                value={user.class}
                onChange={(e) => setUser({ ...user, class: e.target.value })}
              />
            ) : (
              <p>{user.class || 'N/A'}</p>
            )}
            <FontAwesomeIcon
              icon={faEdit}
              size="sm"
              className="edit-icon"
              onClick={isEditing ? handleSave : handleEditClick}
            />
          </div>
          <div className="form-group">
            <label>Board of Education:</label>
            {isEditing ? (
              <input
                type="text"
                value={user.board}
                onChange={(e) => setUser({ ...user, board: e.target.value })}
              />
            ) : (
              <p>{user.board || 'N/A'}</p>
            )}
            <FontAwesomeIcon
              icon={faEdit}
              size="sm"
              className="edit-icon"
              onClick={isEditing ? handleSave : handleEditClick}
            />
          </div>
          {isEditing && (
            <button type="button" className="save-button" onClick={handleSave}>
              Save
            </button>
          )}
          <button type="button" className="sign-out-button" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
