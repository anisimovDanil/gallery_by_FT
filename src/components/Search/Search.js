import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./style.css";

const Search = () => {
  //{ search, setSearch }

  /* const [authors, setAuthors] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectAuthor, setSelectAuthor] = useState("");*/

  /*const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  const getAuthors = async() => {
    const listAuthors = await fetch('https://test-front.framework.team/authors')
    .then(response => response.json())
    setAuthors(listAuthors)
  }
  const getLocations = async() => {
    const listLocations = await fetch('https://test-front.framework.team/locations')
    .then(response => response.json())
    setLocations(listLocations)
  }

  useEffect(() => {
    getAuthors();
    getLocations();
  }, [])*/

  // onChange={e => setSearch(e.target.value)}
  //value = { search };

  return (
    <>
      <input type='search' className='search' placeholder='Name' />
    </>
  );
};

export default Search;

/*
<form className="search-form" onSubmit={submitHandler} method="GET">
        <input
          className="searchInput" 
          type="text"
          name="search"
          placeholder="Name"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

<select 
        name="select-author"
        onChange={(e) => setSelectAuthor(e.target.value)}
        value={selectAuthor}>
          <option>Author</option>
          {
            authors.map(el => (
              <option key={el.id}>
                {el.name}
              </option>
            ))
          }
        </select>
        <select name="select-location"
        onChange={(e) => setInput(e.target.value)}>
          <option>Location</option>
          {
            locations.map(el => (
              <option key={el.id}>
                {el.location}
              </option>
            ))
          }
        </select>
        <select name="select-created">
        <option>Created</option>
        </select>
*/
