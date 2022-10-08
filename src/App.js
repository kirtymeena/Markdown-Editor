import MarkdownArea from "./components/markdownArea/MarkdownArea";
import Navbar from "./contianer/header/Navbar";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./contianer/home/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/markdown-editor" element={<MarkdownArea/>}/>
        </Routes>
      </Router>


      {/* <Navbar/>
      <MarkdownArea/> */}
    </div>
  );
}

export default App;
