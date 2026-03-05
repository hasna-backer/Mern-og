// components/user/UserInfo.jsx

function UserInfo({ user, setUser }) {
	// Function to toggle role
	function toggleRole() {
	  // Updating state from deep child component
	  setUser((prevUser) => ({
		...prevUser,
		role: prevUser.role === "Admin" ? "User" : "Admin",
	  }));
	}
  
	return (
	  <div style={{ border: "2px solid red", padding: "10px", marginTop: "10px" }}>
		<h5>User Info Component</h5>
  
		{/* Displaying user information */}
		<p><strong>Name:</strong> {user.name}</p>
		<p><strong>Role:</strong> {user.role}</p>
  
		{/* Button to update state */}
		<button onClick={toggleRole}>
		  Toggle Role
		</button>
	  </div>
	);
  }
  
  export default UserInfo;
  