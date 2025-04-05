import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  //conditional rendering
  const movieNum =1;


  return (
    <>
    { movieNum ===1 ? (
    <MovieCard movie={{title: "Movie 1", release_date:"2024"}}></MovieCard>
  ) :(
    <MovieCard movie={{title: "Movie 2", release_date:"2020"}}></MovieCard>)}
    </>
  );
}

export default App
