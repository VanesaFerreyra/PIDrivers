import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import { Detail, Home, Landing, Form} from "./Views";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  

  return (
    
      <div className="App">
        {location.pathname !== "/" && <Navbar />}
          <Routes>
            <Route exact path="/" Component={Landing}/>
            <Route exact path="/home" Component={Home}/>
            <Route path="/details:id" Component={Detail}/>
            <Route path="/create" Component={Form}/>
            </Routes>
      </div>
     
  )
}

export default App
//no se si entre BrowserRouter y route va una etiqueta Swich que tambien debe importarse from react-router-dom