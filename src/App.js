import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { DisplayItems } from "./components/DisplayItems";
import AddItems from './components/AddItems';
import Items from './components/Items';
import { useState } from 'react';

function App() {
  const [itemData,setItemData] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <DisplayItems/> }></Route>
          <Route path="/phones/add" element={ <AddItems itemData={itemData} setItemData={setItemData} /> }></Route>
          <Route path="/cards" element={ <Items /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
