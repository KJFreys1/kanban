import React from "react";

export default function LandingPage(props) {
  const handleNav = () => {
    props.history.push("/dashboard")
  }

  return (
    <div className="lp-body">
      <div className="lp-center">
        <div className="float-left">
          <h1>Kanban Board</h1>
          <p>Organize your life for a minty-fresh mind</p>
          <hr></hr>
          <p>This simple, yet powerful tool to help manage your tasks.</p>
          <button className="call-to-action" onClick={handleNav}>
            Get Started
          </button>
        </div>
        <div className="float-right img">

        </div>
      </div>
    </div>
  );
}
