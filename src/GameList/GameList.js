import React from 'react';
import './GameList.css';
import gameData from '../Data/GameData';

const GameList = ({ gameType }) => {

  const chooseRandomGame = (gameType) => {
    
  }

  const allGames = gameData.gameType.map(game => {
    return <p>${game}</p> 
  })

  return (
    <section>
      ${allGames}
      <button onClick={() => chooseRandomGame()}>RANDOMIZE</button>
    </section>
  )
}

export default GameList;