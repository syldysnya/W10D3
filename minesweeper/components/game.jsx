import React from 'react';
// import { Board } from '../minesweeper';
import * as Minesweeper from '../minesweeper';
import Board from './board';


export default class Game extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { board: new Minesweeper.Board(9, 10) };

    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagging) {
    if (flagging) {
      tile.toggleFlag(); 
    } else {
      tile.explore(); 
    }

    this.setState( { board: this.state.board } );
  }

  restartGame() {
    this.setState( { board: new Minesweeper.Board(9, 10) } )
  }

  
  render() {
    let text = null; 

    const lost = this.state.board.lost();
    const won = this.state.board.won();
    let content = null;

    if (lost) {
      text = <h3>Next time's a charm!</h3>;
    } if (won) {
      text = <h3>You won!!</h3>;
    }

    if (lost || won) {
      content = (
        <aside className="modal">
          <div className="modal-screen"></div>
          <div className="modal-form">
            {text}
            <button onClick={this.restartGame}>Play Again</button>
          </div>
        </aside>
      )
    }

    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        {content}
      </div>
    )
  }
}


