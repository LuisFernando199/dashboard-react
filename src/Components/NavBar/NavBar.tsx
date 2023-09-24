import "./navBar.scss";
import React from 'react';

export const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <img src="/logoLuisFernandoDAW.png" alt="logo" />
        <span>DashBoard</span>
      </div>
      <div className="links">
        <img src="/search.svg" alt="" className="link" style={{width:'2.25rem'}}/>
        <img src="/app.svg" alt="" className="link" style={{width:'2.25rem'}}/>
        <img src="/expand.svg" alt="" className="link" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/users.png" alt="" />
          <span>Luis</span>
        </div>
        <img src="/setting.svg" alt="" className="link" />
      </div>
    </div>
  );
};
