import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="lp-body">
      <div className="center">
        <div className="float-left">
          <h1>Kanban</h1>
          <p>Organize your life</p>
          <hr></hr>
          <p>This simple, yet powerful tool to help manage your tasks.</p>
          <button className="primary">
            <Link className="btn" to="/dashboard">
              Dashboard
            </Link>
          </button>
        </div>
        <div className="float-right img">
            
        </div>
      </div>
    </div>
  );
}
