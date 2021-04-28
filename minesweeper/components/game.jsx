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

  updateGame(tile, flagging) {
    if (flagging) {
      tile.toggleFlag(); 
    } else {
      tile.explore(); 
    }

    this.setState( { board: this.state.board } );
  }
  
  render() {
    // if lost or won 
    // content = something
    // else 
    // content = 

    let content = null; 

    if (this.state.board.lost) {
      content = alert("you've lost");
    } if (this.state.board.won) {
      content = alert("you've won");
    }

    return (
      <div>
        {content}
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    )
  }
}


