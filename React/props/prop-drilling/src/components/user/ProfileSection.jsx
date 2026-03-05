// components/user/ProfileSection.jsx

import UserInfo from "./UserInfo";

function ProfileSection({ user, setUser }) {
  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <h4>Profile Section Component</h4>

      {/* 
        Still drilling props down...
      */}
      <UserInfo user={user} setUser={setUser} />
    </div>
  );
}

export default ProfileSection;
