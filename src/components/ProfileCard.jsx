import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, age, profilePicture, bio }) {
  return (
    <div className="profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h1 className="profile-name">{name}</h1>
      <p className="profile-age">Age: {age}</p>
      <p className="profile-bio">{bio}</p>
    </div>
  );
}

export default ProfileCard;
