import React from "react";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white"
      style={{ width: "200px", borderRight: "1px solid gray", padding: "10px", minHeight: "100vh" }}
    >
      <h3>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <a href="/user" style={{ color: "white", textDecoration: "none" }}>Users</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/login" style={{ color: "white", textDecoration: "none" }}>Login</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/signup" style={{ color: "white", textDecoration: "none" }}>Signup</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/post" style={{ color: "white", textDecoration: "none" }}>Posts</a>
        </li>
      </ul>
    </div>
  );
}
