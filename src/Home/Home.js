import React from 'react';
import './Home.css';
import GameList from '../GameList/GameList';

const Home = () => {

  return (
    <main>
      <GameList gameType="barGames" />
      <GameList gameType="boardGames" />
      <GameList gameType="cardGames" />
    </main>
  )
}

export default Home;