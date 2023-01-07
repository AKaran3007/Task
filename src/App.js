import logo from './logo.svg';
import React, { lazy,  Suspense } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Create = lazy(() => import('../src/Components/Create.jsx'));
const View = lazy(() => import('../src/Components/View.jsx'));
const Edit = lazy(() => import('../src/Components/Edit.jsx'));





function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Suspense fallback={<h1>Loading Details Be Calm . . .</h1>}>
      <Routes>
          <Route path='/' exact element={<Create />} />
          <Route path='/view' exact element={<View />} />
          <Route path='/edit/:id' exact element={<Edit />} />


        </Routes>
      </Suspense>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
