import React from "react";

const Stats = (props) => {
  return (
    <ul className="stat">
      <div className="text">
        <div className="player">{props.name}</div>
        <div className="score">{props.score}</div>
      </div>
    </ul>
  );
};

export default Stats;
