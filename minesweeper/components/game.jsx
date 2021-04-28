import React from 'react';
// import { Board } from '../minesweeper';
import * as Minesweeper from '../minesweeper';
import Board from './board';


export default class Game extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { board: new Minesweeper.Board(9, 10) };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {
    
  }
  
  render() {
    return (
      <div>
        <p>Hi</p>
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    )
  }
}


