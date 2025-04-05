import Home from './pages/Home'
import './css/App.css'
import { Routes, Route } from 'react-router-dom';
import Favorite from './pages/Favourites';
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';

function App() {
  


  return (
    <MovieProvider>
      <NavBar/>
    <main className="main-content">
      
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/favourites' element={<Favorite/>}/>
        </Routes>
    </main>
    </MovieProvider>//wrapped inside context
  );
}

export default App
