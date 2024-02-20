import './App.css';
import { BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import { DisplayItems } from "./components/DisplayItems";
import AddItems from './components/AddItems';
import { EditItems } from './components/editItem';
import { useState } from 'react';
import NotFound from './components/notFound';
import Signup from './components/signUp/signUp.jsx';
import SignupForm from './components/signUp/signupForm.jsx';


function App() {
  const [itemData,setItemData] = useState([])
  


  return (
    
    
    <div className="App">
      
      <BrowserRouter>
          
        <Routes>
          
             
            <Route path="/" element={ <Signup/> }></Route>
            <Route path="/signup" element={ <SignupForm/> }></Route>
            <Route path="/display" element={ <DisplayItems/> }></Route>
            <Route path="/phones/add" element={ <AddItems itemData={itemData} setItemData={setItemData} /> }></Route>
            <Route path="/phones/edit/:id" element={<EditItems itemData={itemData} setItemData={setItemData}/>}></Route>       
            <Route path='*' element = {<Navigate replace to='/404'/>}/>
            <Route path="/404" element={<NotFound/>}/>
          
          
        </Routes>
      
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
