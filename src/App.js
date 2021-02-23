import './App.css';


function Person(props) {
  let smokes = <strong>Ne kurit</strong>
  if (props.smokes) {
    smokes = <strong>Kurit</strong>
  }

  return <div className="person">
    <h1>{props.name}</h1>
    <div className="age">{props.age} years old</div>
    <p className="hobby">{props.children}</p>
    <strong>{smokes}</strong>
  </div>;
}

function Sum(props) {
  return <div className="person">{props.a + props.b}</div>
}
function RandomNumber(props) {
  return Math.floor(Math.random(props.min , props.max));
}
function BiggerNumber(props) {
  if (props.a > props.b) {
    return props.a
  }
  else if (props.a < props.b) {
    return props.b
  }
  else {
    return 'Числа равны';
  }
}
function App() {
  return (
    <div className="App">
      <Person name="Elon Musk" age={41}>Listens to <strong>music</strong></Person>
      <Person name="Jeff Besos" age={55} smokes={true} />
      <Person name="Bill Gates" age={56} hobbies={["Singing", "Dancing"]}>Travels</Person>
      <Person name="Mark Zukerberg" age={36} smokes={true}>Haking</Person>
      <Person name="Kubatova Tatyna" age={17}>Reading</Person>
      <Person name="Justin Biber" age={28}>Singing</Person>


      <Sum a={5} b={7}></Sum>
      <RandomNumber min={5} max={10}></RandomNumber>
      <BiggerNumber a={5} b={5}></BiggerNumber>
      <ListItems list={["Apple ", "Orange ", "Lime ", "Banana "]}></ListItems>
    </div>

  );
}

export default App;
