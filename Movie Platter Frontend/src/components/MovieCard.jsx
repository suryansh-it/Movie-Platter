import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext"

function MovieCard({movie}){

    const {isFavourite, addtoFavs , removefromFavs} = useMovieContext()//access to all of them
    const favourite= isFavourite(movie.id)

    function onfavouriteClick(e){
        e.preventDefault()
        if(favourite) remov(movie.id)
        else addtoFavs(movie)
    }

    return <div className="movie-card">
            <div className="movie-poster">
                <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.title}/>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favourite ? "active" : ""}`} onCLick = {onfavouriteClick}>
                        <p>dil</p>
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.released_date?.spilt("-")[0]}</p>
            </div>
    </div>
}

export default MovieCard