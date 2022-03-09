import React from "react";

export default function NavBarItem(props) {
  return (
    <div>
      <li className="nav-item">
        <a className="nav-link" href={props.href}>
          {props.label}
        </a>
      </li>
    </div>
  );
}
