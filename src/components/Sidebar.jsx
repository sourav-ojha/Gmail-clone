import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./css/sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  Add,
  Drafts,
  ExpandMore,
  Inbox,
  Keyboard,
  Label,
  LabelImportant,
  Send,
  Star,
  VideoCall,
  WatchLater,
} from "@material-ui/icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div
          style={{
            background: "rgba(250, 249, 249, 0.3)",
            "border-radius": "10px",
          }}
        >
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
          alt="Gmail"
        />
      </div>
      <div className="sidebar_menu">
        <div className="sidebar_menu_container">
          <div className="menu sidebar_menu_compose ">
            <Add />
            Compose
          </div>
        </div>
        <div className="menu_container">
          <div className="menu">
            <Inbox /> Inbox
          </div>
          <div className="menu">
            <Star /> Starred{" "}
          </div>
          <div className="menu">
            <WatchLater /> Snoozed{" "}
          </div>
          <div className="menu">
            <LabelImportant /> Important
          </div>
          <div className="menu">
            <Send /> Sent
          </div>
          <div className="menu">
            <Drafts /> Drafts
          </div>
          <div className="menu">
            <Label /> Categories
          </div>
          <div className="menu">
            <Label /> Personal
          </div>
          <div className="menu">
            <ExpandMore /> More
          </div>
        </div>
        <div className="meet">
          <h6 className="head">Meet</h6>
          <div className="menu">
            <VideoCall /> New Meeting
          </div>
          <div className="menu">
            <Keyboard /> Join Meeting
          </div>
        </div>
        <div className="hangout">
          <h6 className="head">Hangouts</h6>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar />
            UserName
            <ExpandMore />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
