import React, { useState, useEffect } from "react";
import Filter from "./Filter/Filter";

import "./../index.css";

const Gallery = () => {
  const fetchURL = "https://test-front.framework.team";
  /*const [author, setAuthor] = useState([]);
  const [painting, setPainting] = useState([]);
  const [location, setLocation] = useState([]);*/

  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const urls = ["paintings", "authors", "locations"];

  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleChange = (selectedAuthor, selectedLocation) => {
    console.log(selectedAuthor + " | " + selectedLocation);
    setSelectedAuthor(selectedAuthor);
    setSelectedLocation(selectedLocation);
  };

  const getData = async () => {
    try {
      let result = [];
      const [data1, data2, data3] = await Promise.all(
        urls.map(
          async (url) =>
            await fetch(`${fetchURL}/${url}?_limit=5`).then((res) =>
              res.json(),
            ),
        ),
      ); // LIMIT HERE | _page=1
      /*setPainting(data1);
        setAuthor(data2);
        setLocation(data3);*/

      function renameKey(obj, old_key, new_key) {
        if (old_key !== new_key) {
          Object.defineProperty(
            obj,
            new_key,
            Object.getOwnPropertyDescriptor(obj, old_key),
          );
          delete obj[old_key];
        }
      }
      function rename(obj, old_key, new_key) {
        obj.forEach((el) => renameKey(el, old_key, new_key));
      }

      await Promise.all(
        data1.map(async (user) => {
          result.push({
            ...user,
            ...data2.find((author) => {
              if (author.id === user.authorId) {
                user.authorId = author.name;
              }
            }),
            ...data3.find((location) => {
              if (location.id === user.locationId) {
                user.locationId = location.location;
              }
            }),
          });
        }),
      );
      rename(result, "authorId", "author_name");
      rename(result, "locationId", "location_name");
      setResult(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getArtName = async (author = "", location = "") => {
    console.log(
      `${fetchURL}/paintings?authorId=${author}&locationId=${location}`,
    );

    try {
      const options = await fetch(
        `${fetchURL}/paintings?authorId=${author}&locationId=${location}`,
      ).then((response) => response.json());

      //console.log(options);
      setResult(options);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  /*const getAuthorName = async (args, id) => {
    try {
      const options = await fetch(`${fetchURL}/paintings?${args}=${id}`) //authorId
        .then((response) => response.json());
      setResult(options);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };*/

  /*useEffect(() => {
    getData();
  }, []);*/

  useEffect(() => {
    //console.log(`author = ${selectedAuthor} | location = ${selectedLocation}`);
    selectedAuthor && selectedLocation
      ? getArtName(selectedAuthor, selectedLocation)
      : getData();
  }, [selectedAuthor, selectedLocation]);
  // <p>You have selected: {selectedLocation}</p> - отработало, как добавили в CSelect onChange

  return (
    <>
      <Filter onSearch={handleChange} />
      <main className='main'>
        <div className='container'>
          <ul className='items'>
            {isLoading && !error && <h2>Loading...Wait</h2>}
            {error && !isLoading && <h2>{error}</h2>}
            {result.map((el) => (
              <li className='art-item' key={el.id}>
                <img className='art-img' src={fetchURL + el.imageUrl} />
                <div className='art-description'>
                  <p className='art-name'>{el.name}</p>
                  <p className='art-author'>
                    <span className='bold'>Autor:</span> {el.author_name}
                  </p>
                  <p className='art-created'>
                    <span className='bold'>Created:</span> {el.created}
                  </p>
                  <p className='art-location'>
                    <span className='bold'>Location:</span> {el.location_name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Gallery;
