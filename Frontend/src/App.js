import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Landingpage from './LandingPage/landing-page';
import Postview from './PostView/post-view';
import Form from './form';
function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Landingpage/>}></Route>
      <Route path="/post-view" element={<Postview/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}
export default App;
