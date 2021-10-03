import React from 'react';
import './Home.css';
import GameList from '../GameList/GameList';

const Home = () => {

  return (
    <div className="homeWrapper">
      <div className="greenBar"></div>
      <main className="home">
        <GameList gameType="barGames" />
        <GameList gameType="boardGames" />
        <GameList gameType="cardGames" />
        <GameList gameType="minuteGames" />
        <GameList gameType="wildCard" />
      </main>
      <div className="greenBar"></div>
    </div>
  )
}

export default Home;