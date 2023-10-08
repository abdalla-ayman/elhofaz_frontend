import Home from "@mui/icons-material/HomeMax";
import React from "react";

export default function HomeCard({ title, text, Icon }) {
  return (
    <div className="#">
      <div className="card">
        <div className="icon">
          <div className="svg">
            <Icon />
          </div>
        </div>
        <p className="title">{title}</p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}
