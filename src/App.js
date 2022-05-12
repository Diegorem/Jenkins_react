import logo from './logo.svg';
import './index.css';
import Comp1 from "./components/comp1.js";
import Comp2 from "./components/comp2.js";
import Comp3 from "./components/comp3.js";
import Comp4 from "./components/comp4";
import Comp5 from "./components/comp5";
import Comp6 from "./components/comp6";
import Tag from "./components/tagEdition"
import sociales from "./components/media/linkedin.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Comp1/>
        <Comp2/>
        <Comp3/>
        <Comp4/>
        <Comp5/>
        <Comp6/>
      </header>
      <footer id="redes">
        <center><h3><a href="https://www.linkedin.com/in/diego-eduardo-rodr%C3%ADguez-guzm%C3%A1n-94898a20b"><img
            className="sociales" src={sociales}/></a></h3></center>
      </footer>
    </div>
  );
}

export default App;
