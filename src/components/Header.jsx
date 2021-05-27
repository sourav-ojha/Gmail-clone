import React from "react";
import {
  Search,
  Settings,
  Apps,
  HelpOutlineTwoTone,
  Refresh,
  MoreVert,
} from "@material-ui/icons";
import { Checkbox, IconButton } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import Body from './Body'
import "./css/header.css";

function header() {
  return (
    <div className='right'>
    <div className="header">
      {/* <div className="header_blur"></div> */}
      <div className="header_search">
        <IconButton>
          <Search />
        </IconButton>
        <input type="text" name="search" id="search" placeholder="search" />
      </div>
      <div className="header_left">
        <div className="header_left_icons">
          <div className="blur_bg">
            <IconButton>
              <HelpOutlineTwoTone />
            </IconButton>
          </div>
          <div className="blur_bg">
            <IconButton>
              <Settings />
            </IconButton>
          </div>
          <div className="blur_bg">
            <IconButton>
              <Apps />
            </IconButton>
          </div>
        </div>
        <IconButton color="primary">
          <Avatar />
        </IconButton>
      </div>
    </div>
    <div className="subheader">
      <Checkbox /> <Refresh /> <MoreVert />
    </div>
    <Body />
    </div>
  );
}

export default header;
