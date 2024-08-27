import { useEffect , useState } from "react"
const Home = () =>{
    const [movies , setMovies ] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:8000/movieLibrary')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data && data.categories){
                setMovies(data.categories);
            }else{
                console.error("no movies found !");
            }
        })
        .catch(error =>{
            console.error("failes to fetch movies" , error);
        });
    })
    return(
        <div className="allMovies">
            {movies.length > 0 ? (
                movies.map((movie)=>(
                    <div className="movie-preview" key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={movie.posterUrl} alt={movie.title} />
                        <p>Rating: {movie.rating ? movie.rating : "Not yet rated"}</p>
                        <p>Release Date: {movie.releaseDate}</p>
                    </div>
                ))
            ) : (
                <p>No movies available or loading failed.</p>
            )};
        </div>
    )
}

export default Home