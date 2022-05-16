import React from "react";
import { useAuth } from "../Components/Context/AuthProvider";

const ProfilePage = () => {
  const userData = useAuth();
  console.log(userData);
  return (
    <div>
      <h3>{userData.name}</h3>
      <h3>{userData.email}</h3>
      <h4>{userData.phoneNumber}</h4>
    </div>
  );
};

export default ProfilePage;
