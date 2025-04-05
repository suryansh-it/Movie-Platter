import "../css/MovieCard.css"

function MovieCard({movie}){

    function onfavouriteClick(){
        alert("clicked")
    }

    return <div className="movie-card">
            <div className="movie-poster">
                <img src= {movie.url} alt= {movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onCLick = {onfavouriteClick}>
                        <p>dil</p>
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.released_date}</p>
            </div>
    </div>
}

export default MovieCard