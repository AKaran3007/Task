import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Components/View';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
