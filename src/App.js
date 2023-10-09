import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Information from "./components/Information";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Sociallinks from "./components/Sociallinks";



function App() {
  return (
<div>
  <Navbar/>
  <Home/>
  <About/>
  <Portfolio/>
  <Experience/>
  <Information/>

  <Sociallinks/>
</div>
  );
}

export default App;
