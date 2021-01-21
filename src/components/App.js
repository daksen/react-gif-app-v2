import React, { useState } from 'react';
import Header from './Header';


const App = () => {
    const [gifs, setGifs] = useState([]);

    return (
        <div id="container">
            <div id="section">
                <div>
                    <Header setGifs={setGifs} />
                </div>
                <div className="scrollable-content">
                    {
                        gifs.map(img => {
                            return <img key={img.id} alt={img.title} src={img.url} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
