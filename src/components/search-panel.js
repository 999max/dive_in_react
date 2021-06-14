import React from 'react';
import './search-panel.css';


const SearchPanel = () => {
    const textPlaceholder = 'type to search'
    
    return (
        <input type='text'
        className='form-control search-input'
                placeholder={ textPlaceholder } />
    )
};

export default SearchPanel;