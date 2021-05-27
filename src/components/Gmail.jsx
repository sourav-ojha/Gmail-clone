import React from "react";
import Header from "./Header";
import './css/gmail.css';
import Sidebar from "./Sidebar";

function Gmail() {
  return (
    <div className="gmail_container">
      {/* sidebar */}
      <Sidebar />
      {/* header */}
      <Header />
      {/* body */}
      
    </div>
  );
}

export default Gmail;
