import React, { useContext } from 'react';
import UserContext from '../../Components/UserContext';

function UserProfile() {
  const { userName,userEmail } = useContext(UserContext);
  return (
    <div>
      <h2>User Profile</h2>
      {userName && userEmail && (
        <div>
          <p>Name: {userName}</p>
          <p>Email: {userEmail}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
