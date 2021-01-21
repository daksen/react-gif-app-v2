import React, { useState } from 'react';


const Search = ({setGifs}) => {
    const [inputValue, setInputValue] = useState('');

    const getGifs = async(search) => {
        const url = `https://api.giphy.com/v1/gifs/search?q="${search}"&limit=10&api_key=uxTQOUYCoyHbE54ZliTDHgkdwIv4dzxk`;
        const request = await fetch(url);
        const {data} = await request.json();
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        setGifs(gifs);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 0) {
            setInputValue('');
            getGifs(inputValue);
        }
    }

    return (
        <>
            <form onSubmit={handleInputSubmit}>
                <input 
                    type="text"
                    id="search-text"
                    placeholder="Search for giphys"
                    autoComplete="off"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
}

export default Search;
