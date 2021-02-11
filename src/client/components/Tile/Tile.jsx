import React from 'react';
import './Tile.scss'

const Tile = ({image, text, onClickHandler}) => {
    return (
        <div className="tile" onClick={onClickHandler}>
            <img className="image" src={image}/>
            <p className="description">{text}</p>
        </div>
    )
}

export default Tile;