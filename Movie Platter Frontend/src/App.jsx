import Home from './pages/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Favorite from './pages/Favourites';


function App() {
  


  return (
    <main className="main-content">
      
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/favourites' element={<Favorite/>}/>
        </Routes>
    </main>
  );
}

export default App
