import "./App.css"
import Person from "./components/Person/Person";
import Button from "./components/Button/Button";
import SolidButton from "./components/SolidButton/SolidButton";
import BackgroundButton from "./components/BackgroundButton/BackgroundButton";
import DashedButton from "./components/DashedButton/DashedButton";
import DottedButton from "./components/DottedButton/DottedButton";
import BorderButton from "./components/BorderButton/BorderButotn";
import PaddingButton from "./components/PaddingButton/PaddingButton";
import BorderSolid from "./components/BorderSolid/BorderSolid";
import CapitalButton from "./components/CapitalButton/CapitalButton";
import DottedBorderButton from "./components/DottedBorderButton/DottedBorderButton";
import PersonList from "./components/PersonList/PersonList";

function App() {
  const persons = [
    { name: "Elon Baike", age: 47, hobby: "Ice skating, Eating donuts, Dancing under the moon" },
    { name: "Bill Baike", age: 50, hobby: "Saving the world" }
  ];
  return (
    <div className="App">
      <Person name="Elon " age={47}>
        Ice skating, Eating donuts, Dancing under the moon
      </Person>
      <Person name="Bill " age={50}>
        Saving the world
      </Person>
      <span className="highlight">Hello</span>
      <Button>Click</Button>
      <SolidButton>Style 1</SolidButton>
      <BackgroundButton>Style 2</BackgroundButton>
      <DashedButton>Style 3</DashedButton>
      <DottedButton>Style 4</DottedButton>
      <BorderButton>Style 5</BorderButton>
      <PaddingButton>Style 6</PaddingButton>
      <BorderSolid>Style 7</BorderSolid>
      <CapitalButton>Style 8</CapitalButton>
      <DottedBorderButton>Style 9</DottedBorderButton>
      <PersonList persons={persons} />
    </div>
  );
}
export default App;
