import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] =useState("");

    const movies= [
        {id :1, title : "John Wick", release_date : "2020"},
        {id :1, title : "Terminator", release_date : "1999"},
        {id :1, title : "The Matrix", release_date : "1998"},
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("")
    };

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search movies..." className="search-input" 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid"> 
            {/* tosearch movies according to query */}
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (   
                    <MovieCard movie={movie} key= {movie.id}/> //display this for every singlr elemetn 
                ))}
            </div>
        </div>
    ) 
}
export default Home;