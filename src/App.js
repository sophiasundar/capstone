import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { DisplayItems } from "./components/DisplayItems";
import AddItems from './components/AddItems';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <DisplayItems/> }></Route>
          <Route path="/phones/add" element={ <AddItems/> }></Route>
          <Route path="/cards" element={ <Items/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
