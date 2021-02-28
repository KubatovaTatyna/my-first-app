
import List from "./components/List";
import ListOl from "./components/Ol";
import SquareList from "./components/SquareList";
import Table from "./components/Table";
import Wealth from "./components/Wealth";
import Root from "./components/Root";
import UpperCaseList from "./components/UpperCaseList";
import CapitalCase from "./components/CapitalCase";


function App() {
  let richPeople = ["Elon Musk" , "Jeff Besos" ,"Bill Gates" ,];
  let richPeopleLowerCase = ["elon musk" , "jeff besos" ,"bill gates" ,];
  let peopleWealth = [
   {name : "Elon Musk" ,wealth: 1515354545},
   {name : "Jeff Besos" ,wealth: 151535544545},
   {name : "Bill Gates" ,wealth: 1515351204545},
  ];
  let numbers = [4 , 6 , 1 , 2 ]

  return (
    <div className="App">
      <List items = {richPeople} />
      <ListOl items = {richPeople} />
      <SquareList items = {richPeople} />
      <Wealth items = {peopleWealth} />
      <Table items = {peopleWealth} />
      <Root items = {numbers} />
      <UpperCaseList items = {richPeople} />
      <CapitalCase items = {richPeopleLowerCase} />
    </div>
  );
}
export default App;
