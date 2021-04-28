import React from 'react';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault; 
        return <div onClick={this.props.updateGame}></div>
    }

    render() {   
        const tile = this.props.tile; 
        const count = tile.adjacentBombCount();
        let content;
        
        if (tile.explored && count > 0) {
            content = <div className="tile explored">{count}</div>
        } else if (tile.flagged) {
            content = <div className="tile flagged">&#x2691;</div>
        } else {
            content = <div className="tile unexplored"></div>
        }
        
        return content; 
    }
};