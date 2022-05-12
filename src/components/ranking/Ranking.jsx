import React from "react";
import "../../styles/ranking/_ranking.scss";
import player1_title from "../../assets/images/image16/Image 16.png";
import player2_title from "../../assets/images/image17/Image 17.png";
import player3_title from "../../assets/images/image18/Image 18.png";

const Ranking = () => {
  return (
    <section className="ranking">
      <div className="player-container player1">
        <img
          src={player1_title}
          alt="Team ul1Barry"
          title="TEAM UL1BARRY"
          className="player-title"
        />
        <div className="player-stats"></div>
      </div>
      <div className="player-container player2">
        <img
          src={player2_title}
          alt="Team Gabriel Montiel"
          title="TEAM GABRIEL MONTIEL"
          className="player-title"
        />
        <div className="player-stats"></div>
      </div>
      <div className="player-container player3">
        <img
          src={player3_title}
          alt="Team MYM ALK4PON3"
          title="TEAM MYM ALK4PON3"
          className="player-title"
        />
        <div className="player-stats"></div>
      </div>
    </section>
  );
};

export default Ranking;
