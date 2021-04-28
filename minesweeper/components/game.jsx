import React from 'react';
import { Board, Tile } from '../minesweeper';

export default class Game extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { board: new Board(9, 10) }
  }

}


