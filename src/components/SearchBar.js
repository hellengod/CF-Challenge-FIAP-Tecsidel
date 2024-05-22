import React from 'react';
import './Searchbar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Pesquisa de localização, incidente ou placa veicular" className="search-input" />
            <button className="search-button" onClick={() => alert('Search button clicked')}>
                <img src='\Images\search-icon.png' alt="Search" />
            </button>
            <img src="\Images\profile-img.png" alt="Profile" className="profile-picture" />
        </div>
    );
};

export default SearchBar;