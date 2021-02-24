// import React from 'react';
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld";
import Chunga from "./components/Chunga";
import Hochu from "./components/Hochu";
import Book from "./components/Book";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ByeWorld />
      <Chunga />
      <Hochu v='more' />
      <Hochu v='kosmos' />
      <Book name = 'Dark Tower' author= 'Stephen King' />
      <Song sing = 'Snowman' artist= 'Sia' />
    </div>
  );
}
export default App;
