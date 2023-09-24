import "./menu.scss";
import React from 'react';
import { Link } from "react-router-dom";

import { menu } from "../../data";
export const Menu = () => {
  return (
    <div>
      {menu.map((item) => (
        <div className="Menu" key={item.id}>
          <div className="item">
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link to={listItem.url} className="linkItem" key={listItem.id}>
                <img src={listItem.icon} alt="icon" />
                <span className="item-title">{listItem.title}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
