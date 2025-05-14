import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Profile.css";

const Profile = () => {
  const { user, setUser } = useAuth(); // Ensure setUser is exposed from AuthContext
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Update user data locally (add API call here if needed)
    const updatedUser = { ...user, ...formData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="profile-avatar"
        />

        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="profile-input"
            />
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="profile-input"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="profile-input"
            />
            <div className="profile-actions">
              <button onClick={handleSave} className="save-btn">Save</button>
              <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
            </div>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
