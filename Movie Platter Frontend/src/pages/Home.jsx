import MovieCard from "../components/MovieCard"

function Home() {

    const movies= [
        {id :1, title : "John Wick", release_date : "2020"},
        {id :1, title : "Terminator", release_date : "1999"},
        {id :1, title : "The Matrix", release_date : "1998"},
    ]

    const handleSearch = () => {};

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search movies..." className="search-input" />
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key= {movie.id}/> //display this for every singlr elemetn 
                ))}
            </div>
        </div>
    ) 
}
export default Home;