import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Views/Home";
import AboutMe from "./Views/AboutMe";
import Hobbies from "./Views/Hobbies";
import Projects from "./Views/Projects";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route path="/home" Component={Home}/>
          <Route path="/about" Component={AboutMe}/>
          <Route path="/projects" Component={Projects}/>
          <Route path="/hobbies" Component={Hobbies}/>
          <Route path="*" Component={NotFound}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
