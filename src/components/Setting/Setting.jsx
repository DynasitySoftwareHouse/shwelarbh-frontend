import React, { useState } from "react";
import styles from "./Setting.module.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Setting(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.mainContainer}>
      <div className="flex justify-center">
        <div className="flex flex-col mt-56">
          {/* Profile */}
          <div>
            <a href="/setting/profile" className="btn bg-transparent m-5 w-72">
              Profile
            </a>
          </div>
          {/* Transition history */}
          <div>
            <a href="/setting/transition" className="btn bg-transparent m-5 w-72">
              Transition History
            </a>
          </div>
          {/* Language */}
          <div>
            <a className="btn bg-transparent m-5 w-72">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{ color: "#fff" }}>
                Language
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}>
                <MenuItem onClick={handleClose}>English</MenuItem>
                <MenuItem onClick={handleClose}>Myanmar Unicode</MenuItem>
                <MenuItem onClick={handleClose}>Myanmar Zawgyi</MenuItem>
              </Menu>
            </a>
          </div>
          {/* Color Description */}
          <div>
            <a href="" className="btn bg-transparent m-5 w-72">
              Color Description
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
