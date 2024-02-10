import React from 'react';
import './component.css';

const Searchbar = (props) => {

return (
  <form>
  <div className='searchbar'>
    <input
      onChange={props.handleInputChange}
      value={props.search}
      name="search"
      type="text"
      placeholder="Search for a TV show"
      id="search"
    />
    <button 
      onClick={props.handleSearchSubmit}
      type="submit"
      className='btn search-btn'
    >
      Search
      </button>

    </div>

  </form>
);
};

export default Searchbar;