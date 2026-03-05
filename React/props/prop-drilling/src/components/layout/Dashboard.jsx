// components/layout/Dashboard.jsx

import Sidebar from "./Sidebar";

function Dashboard({ user, setUser }) {
  return (
    <div style={{ border: "2px solid black", padding: "10px", marginTop: "10px" }}>
      <h2>Dashboard Component</h2>

      {/* 
        Dashboard does NOT use user.
        But it must forward it to Sidebar.
        This is unnecessary coupling.
      */}
      <Sidebar user={user} setUser={setUser} />
    </div>
  );
}

export default Dashboard;
