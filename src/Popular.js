import { useEffect, useState } from "react";

export const Popular = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/movieLibrary')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // Assuming you want to display movies from the 'popular' category
                if (data && data.categories && data.categories.popular) {
                    setMovies(data.categories.popular);
                } else {
                    console.error("No popular movies found");
                }
            })
            .catch(error => {
                console.error("Failed to fetch movies:", error);
            });
    }, []);

    return (
        <div className="movies">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div className="movie-preview" key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={movie.posterUrl} alt={movie.title} />
                        <p>Rating: {movie.rating ? movie.rating : "Not yet rated"}</p>
                        <p>Release Date: {movie.releaseDate}</p>
                    </div>
                ))
            ) : (
                <p>No movies available or loading failed.</p>
            )}
        </div>
    );
};