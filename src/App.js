import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import { Component } from 'react';

class App extends Component {
render(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/DetailsPage/:id' element={<DetailsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
}

export default App;
