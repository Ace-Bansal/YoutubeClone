import React from 'react';

const SearchBar = (props) => {
    return (
      <div className="search-bar">
        <input
          type="text"
          onChange = {(event) => props.onSearchTermChange(event.target.value)}
          />
      </div>
    );
  }


export default SearchBar;
