import React from 'react';
import './GameList.css';
import gameData from '../Data/GameData';

const GameList = ({ gameType }) => {

  const chooseRandomGame = () => {
    const randomNum = Math.floor((Math.random() * gameData[gameType].length));
    removeSelection();
    showSelection(randomNum);
  }

  const showSelection = (randomNum) => {
    const selectedGame = gameData[gameType][randomNum]
    const selectedNode = document.querySelector(`.${selectedGame.split(" ").join("")}`)
    selectedNode.classList.add("selected")
  }

  const removeSelection = () => {
    const allGames = document.querySelectorAll(`.${gameType}`)
    allGames.forEach(game => {
      game.classList.remove('selected');
    })
  }

  const allGames = gameData[gameType].map(game => {
    const classes = `game ${game.split(" ").join("")} ${gameType}`;
    return <p className={classes} key={gameData[gameType].indexOf(game)}>{game.toUpperCase()}</p> 
  })

  return (
    <section className="gameList">
      <div className="games">
        {allGames}
      </div>
      <button onClick={() => chooseRandomGame()}>choose</button>
    </section>
  )
}

export default GameList;