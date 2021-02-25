// import React from 'react';
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld";
import Chunga from "./components/Chunga";
import Hochu from "./components/Hochu";
import Book from "./components/Book";
import Song from "./components/Song";
import Length from "./components/Length";
import Uppercase from "./components/Uppercase";
import Lowercase from "./components/Lowercase";
import Age from "./components/Age";
import Year from "./components/Year";
import Round from "./components/Round";
import Power from "./components/Power";
import Switch from "./components/Switch";
import Water from "./components/Water";
import Sum from "./components/Sum";
import RandomNumber from "./components/RandomNumber";
import BiggerNumber from "./components/BiggerNumber";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ByeWorld />
      <Chunga />
      <Hochu v='more' />
      <Hochu v='kosmos' />
      <Book name='Dark Tower' author= 'Stephen King' />
      <Song sing='Snowman' artist= 'Sia' />
      <Length string='Hello world' />
      <Length string='Example string' />
      <Uppercase>hello world</Uppercase>
      <Lowercase>HELLO WORLD</Lowercase>
      <Age year={1989} />
      <Age year={1900} />
      <Year age={17}/ >
      <Round number={2.3}/ >
      <Power number={5} to={2}/>
      <Switch on={false}/>
      <Water frozen={false}/>
      <Water frozen={true}/>
      <Sum a={5} b={8} />
      <RandomNumber min={12} max={100} />
      <BiggerNumber a={9} b={4} />
      <ListItems list={["Apple ", "Orange ", "Lime ", "Banana "]} />
    </div>
  );
}
export default App;
