import React from 'react';

export const Tile = ({tile}) => {
    const count = tile.adjacentBombCount();
    const pos = tile.pos;

    let content;

    if (tile.explored && tile.adjacentBombCount() > 0) {
        content = <div className="tile">{tile.adjacentBombCount()}</div>
    }

    console.log(tile);
    return(

        <p>T</p>
    )
};