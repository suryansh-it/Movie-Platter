import "../css/Favourites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite(){


    const {favourites} = useMovieContext();
    if(favourites){
        return (
            <div className="favourites">
                <h2>Your Favourites</h2>
                <div className="movies-grid"> 
            {/* tosearch movies according to query */}
                {favourites.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (   
                    <MovieCard movie={movie} key= {movie.id}/> //display this for every singlr elemetn 
                ))}
            </div>
            </div>
        )

    }


    return <div className="favourites-empt">
        <h2>No fav movies yet</h2>
    </div>
}

export default Favorite