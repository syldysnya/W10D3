import React from 'react';
import { Tile } from './tile';

export default class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let rows = this.props.board.grid; 
    const rowDivs = rows.map( (sub, idx) => { 
        
        return (
            <div key={idx}>{
                sub.map((tile, i) => {
                    return (
                        <Tile tile={tile} key={i} updateGame={this.props.updateGame}/>
                    )
                })
            }</div> 
        )
    });


    return (
      <div>
        {rowDivs}
      </div>
    )    
  } 
}