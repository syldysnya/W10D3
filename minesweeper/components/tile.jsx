import React from 'react';

export const Tile = ({tile}) => {
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
};