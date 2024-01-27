import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { DisplayItems } from "./components/DisplayItems";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <DisplayItems/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
