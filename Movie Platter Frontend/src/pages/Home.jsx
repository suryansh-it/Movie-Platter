import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react";
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {

    const [searchQuery, setSearchQuery] =useState("");
    // storing movies in state so everytime we update movie list , it will automatically rerender the coponent for us
    const [movies, setMovies]= useState([]);
    const [error, setError]= useState(null);// to store error
    const [loading, setLoading]= useState(true);//to store loading data


    useEffect(()=>{
        const loadPopularMovies= async ()=>{
            try {
                const popularmovies = await getPopularMovies()
                setMovies(popularmovies)
            }catch(err){
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    // const movies= [
    //     {id :1, title : "John Wick", release_date : "2020"},
    //     {id :1, title : "Terminator", release_date : "1999"},
    //     {id :1, title : "The Matrix", release_date : "1998"},
    // ]

    const handleSearch = async (e) => {
        e.preventDefault();
        
        if(!searchQuery.trim()) return  //removes white spaces :trim
        if (loading) return

        setLoading(true)
        try{
            const searchResults= await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search  movies ...")
        }finally{
            setLoading(false)
        }

       
    };

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search movies..." className="search-input" 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? ( <div className="loading">Loading...</div>
            ):(
            <div className="movies-grid"> 
            {/* tosearch movies according to query */}
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (   
                    <MovieCard movie={movie} key= {movie.id}/> //display this for every singlr elemetn 
                ))}
            </div>
    )}
        </div>
    ) 
}
export default Home;