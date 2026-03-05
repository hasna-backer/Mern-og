// components/layout/Sidebar.jsx

import ProfileSection from "../user/ProfileSection";

function Sidebar({ user, setUser }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", marginTop: "10px" }}>
      <h3>Sidebar Component</h3>

      {/* 
        Sidebar also doesn't need user.
        But must pass it again.
      */}
      <ProfileSection user={user} setUser={setUser} />
    </div>
  );
}

export default Sidebar;
