import React, { useState } from 'react';
import './App.css';

function App() {
  // 1. Load default student data
  const [student, setStudent] = useState({
    name: "Alex Johnson",
    id: "S12345",
    major: "Computer Science",
    email: "alex.j@university.edu",
    gpa: "3.8"
  });

  // State to handle the toggle between View and Edit modes
  const [isEditing, setIsEditing] = useState(false);
  
  // Temporary state to hold form changes before saving
  const [formData, setFormData] = useState(student);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Update details → Save
  const handleSave = () => {
    setStudent(formData);
    setIsEditing(false);
  };

  return (
    <div className="App">
      <div className="profile-container">
        <h2>Smart Student Profile</h2>
        
        <div className="card">
          {!isEditing ? (
            // 2. Display Profile
            <div className="view-mode">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Student ID:</strong> {student.id}</p>
              <p><strong>Major:</strong> {student.major}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>GPA:</strong> {student.gpa}</p>
              <button className="edit-btn" onClick={() => { setFormData(student); setIsEditing(true); }}>
                Edit Profile
              </button>
            </div>
          ) : (
            // 3. Click "Edit" → Show Form
            <div className="edit-mode">
              <label>Name</label>
              <input name="name" value={formData.name} onChange={handleChange} />
              
              <label>Major</label>
              <input name="major" value={formData.major} onChange={handleChange} />
              
              <label>Email</label>
              <input name="email" value={formData.email} onChange={handleChange} />
              
              <label>GPA</label>
              <input name="gpa" value={formData.gpa} onChange={handleChange} />

              <div className="button-group">
                <button className="save-btn" onClick={handleSave}>Save</button>
                <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;