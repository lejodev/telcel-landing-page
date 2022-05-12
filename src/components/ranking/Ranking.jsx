import React from "react";
import "../../styles/ranking/_ranking.scss";
import player1_title from "../../assets/images/image16/Image 16.png";
import player2_title from "../../assets/images/image17/Image 17.png";
import player3_title from "../../assets/images/image18/Image 18.png";
import Stats from "./stats/Stats";
import { players } from "../../utils/data/Data";

const Ranking = () => {
  return (
    <section className="ranking" id="ranking">
      <div className="player-container player1">
        <img
          src={player1_title}
          alt="Team ul1Barry"
          title="TEAM UL1BARRY"
          className="player-title"
        />
        <div className="player-stats-container">
          {players.map((player) => (
            <Stats key={player.id} name={player.name} score={player.score} />
          ))}
        </div>
      </div>
      <div className="player-container player2">
        <img
          src={player2_title}
          alt="Team ul1Barry"
          title="TEAM UL1BARRY"
          className="player-title"
        />
        <div className="player-stats-container">
          {players.map((player) => (
            <Stats key={player.id} name={player.name} score={player.score} />
          ))}
        </div>
      </div>
      <div className="player-container player3">
        <img
          src={player3_title}
          alt="Team ul1Barry"
          title="TEAM UL1BARRY"
          className="player-title"
        />
        <div className="player-stats-container">
          {players.map((player) => (
            <Stats key={player.id} name={player.name} score={player.score} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ranking;
