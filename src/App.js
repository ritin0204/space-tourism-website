import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";


function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/destination" element={<Destination/>} />
            <Route path="/crew" element={<Crew/>} />
            <Route path="/technology" element={<Technology/>} />
            <Route path="*" element={<h1>404: Not Found</h1>} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
