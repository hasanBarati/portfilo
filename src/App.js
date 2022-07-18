
import './App.css';
import {Navbar} from "./components/navbar";
import {Home} from "./components/home";
import {Sociallinks} from "./components/sociallinks";
import {About} from "./components/about";
import {Portfilo} from "./components/portfilo";
import {Experience} from "./components/experience";
import {Contact} from "./components/contact";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <About />
        <Portfilo/>
        <Experience />
        <Contact />
        <Sociallinks/>
    </div>
  );
}

export default App;
