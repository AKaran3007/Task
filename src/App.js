import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Components/View';
import Edit from './Components/Edit';
import Dropdown from './Components/Dropdown';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/dropdown' element={<Dropdown/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
