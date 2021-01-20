import React from 'react';
import Search from './Search'


const Header = ({setGifs}) => {
    return (
        <div id="header">
            <div id="giphy-logo">
                <img src="https://i.imgur.com/7DuUbZf.png" id="giphy-logo" alt="Giphy logo" width="25%" />
            </div>
            <Search setGifs={setGifs} />
        </div>
    );
}

export default Header;
