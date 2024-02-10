import React from 'react';


const Searchbar = (props) => {

return (
  <form>
  <div>
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
      className='btn btn-primary'
    >
      Search
      </button>

    </div>

  </form>
);
};

export default Searchbar;