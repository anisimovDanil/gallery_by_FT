import React from "react";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header />
      <Gallery />
    </>
  );
}
//<Header/>
//<Form/>
export default App;

/*          <div className='search'>
            <Search onSearch={getArtName}/>
            <Filter onSelect={getAuthorName}/>
          </div>*/
