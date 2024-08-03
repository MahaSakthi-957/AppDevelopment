import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = () => {
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/subjects');
      setSubjects(response.data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  }, []); // Empty dependency array ensures this function is created only once

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]); // fetchSubjects is now a stable dependency

  const handleDeleteSubject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/subjects/${id}`);
      fetchSubjects(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting subject:', error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      <div className="subjects-list">
        {subjects.map((subject) => (
          <div key={subject.id} className="subject-item">
            <p>{subject.name}</p>
            <button onClick={() => handleDeleteSubject(subject.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
