import Switch from "./components/Switch";
import Name from "./components/Name";
import DoubleInput from "./components/DoubleInput";
import List from "./components/List";
import Counter from "./components/Counter";
import InputLength from "./components/InputLength";
import Color from "./components/Color";
import InputRange from "./components/InputRange";
import Dollar from "./components/Dollar";
import Temp from "./components/Temp";
import FontSize from "./components/FontSize";
import InputColor from "./components/InputColor";
import ColorSliders from "./components/ColorSliders";
import RotateInput from "./components/RotateInput";
import MirroredInput from "./components/MirroredInput";


function App() {

  return (
    <div>
      <Switch />
      <h1>Example 1</h1>
      <Name />
      <hr></hr>
      <h1>Example 2</h1>
      <DoubleInput />
      <hr></hr>
      <h1>Example 3</h1>
      <List />
      <h1>Example 4</h1>
      <Counter />
      <h1>Example 5</h1>
      <InputLength value= "test" />
      <h1>Example 6</h1>
      <Color value="#45335" />
      <h1>Example 7</h1>
      <InputRange min={0} max={10} />
      <h1>Example 8</h1>
      <Dollar />
      <h1>Example 9</h1>
      <Temp />
      <FontSize />
      <InputColor />
      <ColorSliders />
      <br></br>
      <RotateInput />
      <hr></hr>
      <MirroredInput />
    </div>
  )
}
export default App;
