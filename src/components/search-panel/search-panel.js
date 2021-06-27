import React, { Component } from 'react';
import './search-panel.css';


export default class SearchPanel extends Component {
    
    state ={
        term: '',
    }

    textPlaceholder = 'type to search'
    serachItems = (event) => {
        const term = event.target.value;
        this.setState({ term })
        this.props.onSearch(term)
        // console.log(this.props)
        // console.log(event.target.value)
    }

    render() {
    return (
        <input type='text'
        className='form-control search-input'
                placeholder={ this.textPlaceholder }
                onChange={this.serachItems} 
                value={this.state.term}/>
    )
    }
};

// export default SearchPanel;