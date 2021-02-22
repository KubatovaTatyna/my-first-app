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
function App() {
  return (
    <div className="App">
      <Person name="Elon Musk" age={41}>Listens to <strong>music</strong></Person>
      <Person name="Jeff Besos" age={55} smokes={true} />
      <Person name="Bill Gates" age={56} hobbies={["Singing", "Dancing"]}>Travels</Person>
      <Person name="Mark Zukerberg" age={36} smokes={true}>Haking</Person>
      <Person name="Kubatova Tatyna" age={17}>Reading</Person>
      <Person name="Justin Biber" age={28}>Singing</Person>
    </div>

  );
}

export default App;
