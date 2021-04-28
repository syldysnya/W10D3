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
  
  render() {

    let content = null;
    

    if (this.state.board.lost()) {
      text = <h3>you've lost</h3>;
    } if (this.state.board.won()) {
      text = <h3>you've won</h3>;
    }

    content = (
      <aside className="modal">
        <div className="modal-screen"></div>
        <div className="modal-form">
          {text}
          <button onClick={this.restartGame}>Play Again</button>
        </div>
      </aside>
    )

    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        {content}
      </div>
    )
  }
}


