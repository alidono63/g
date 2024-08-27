import { useEffect, useState } from "react";

export const Upcoming = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/movieLibrary')
       
            .then(res => {
                console.log('response status:', res.status);
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json(); // Fixed: `return res json();` should be `return res.json();`
            })
            .then(data => {
                console.log("Fetched data:", data);
                if (data && data.categories && data.categories.upcoming) {
                    console.log("Upcoming Movies:", data.categories.upcoming);
                    setMovies(data.categories.upcoming);
                } else {
                    console.error("No upcoming movies found");
                }
            })
            .catch(error => {
                console.error("Failed to fetch movies:", error); // Fixed: `.catch error =>` should be `.catch(error =>`
            });
    }, []); // Fixed: The dependency array should be `[]`

    return (
        <div className="movies-upcoming">
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