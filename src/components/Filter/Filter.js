import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./style.css";

const Filter = ({ onSearch }) => {
  //{ search, setSearch }
  const [input, setInput] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [locations, setLocations] = useState([]);
  //const [createdData, setCreatedData] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const getInfo = async (argument, fn) => {
    const data = await fetch(
      `https://test-front.framework.team/${argument}`,
    ).then((response) => response.json());
    fn(data);
  };

  const createOptions = (array, property) => {
    return array.map((el) => ({
      value: el["id"],
      label: el[property],
    }));
  };

  useEffect(() => {
    getInfo("authors", (data) => setAuthors(data));
    getInfo("locations", (data) => setLocations(data));
  }, []);

  useEffect(() => {
    console.log(
      `select_author = ${selectedAuthor.value} | select_location = ${selectedLocation.value}`,
    );
    onSearch(selectedAuthor.value, selectedLocation.value);
  }, [selectedAuthor, selectedLocation]);

  /*useEffect(() => {
    //console.log(selectedLocation);
    onSearch(selectedLocation.value);
  }, [selectedLocation]);*/

  return (
    <section className='filter'>
      <div className='container'>
        <div className='wrapper'>
          <Search />
          <CustomSelect
            options={createOptions(authors, "name")}
            placeholder='Author'
            value={selectedAuthor}
            onChange={setSelectedAuthor}
          />
          <CustomSelect
            options={createOptions(locations, "location")}
            placeholder='Loactions'
            value={selectedLocation}
            onChange={setSelectedLocation}
          />
          <CustomSelect options={[]} placeholder='Created' />
        </div>
      </div>
    </section>
  );
};

export default Filter;

// <Search onSearch={getArtName}/>
// value={input}
/*const getLocations = async() => {
  const data = await fetch('https://test-front.framework.team/locations')
  .then(response => response.json())
  setLocations(data)
}*/
