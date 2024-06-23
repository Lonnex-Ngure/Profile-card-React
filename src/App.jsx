import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const profiles = [
    {
      name: "Lonnex",
      age: 22,
      profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "I am from Madagascar. I love programming and traveling.",
    },
    {
      name: "Sarah",
      age: 30,
      profilePicture: "https://randomuser.me/api/portraits/women/29.jpg",
      bio: "A passionate developer who loves to explore new technologies.",
    },
    {
      name: "Kennedy",
      age: 25,
      profilePicture: "https://randomuser.me/api/portraits/men/65.jpg",
      bio: "A tech enthusiast and a hobbyist photographer.",
    },
  ];

  return (
    <div className="App">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          profilePicture={profile.profilePicture}
          bio={profile.bio}
        />
      ))}
    </div>
  );
}

export default App;
