/**
 * REFERENCES
 * https://stackoverflow.com/questions/70353397/how-to-update-the-state-if-dropdown-has-selected-value-with-hooks-and-usestate
 */

import  { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieSelector()
{
    // Array of movie objects.
        const movies = [
        {
            title: 'The Shawshank Redemption',
            year: 1994,
            director: 'Frank Darabont',
            duration: '2h 22min',
            genre: ['Crime', 'Drama'],
            score: 9.3
        },
        {
            title: 'The Dark Knight',
            year: 2008,
            director: 'Christopher Nolan',
            duration: '2h 32min',
            genre: ['Action', 'Crime', 'Drama', 'Thriller'],
            score: 9
        },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
            director: 'Peter Jackson',
            duration: '3h 21min',
            genre: ['Adventure', 'Drama', 'Fantasy'],
            score: 8.9
        },
        {
            title: 'Forrest Gump',
            year: 1994,
            director: 'Robert Zemeckis',
            duration: '2h 22min',
            genre: ['Comedy', 'Drama', 'Romance'],
            score: 8.8
        },
        {
            title: 'La vita è bella',
            year: 1997,
            director: 'Roberto Benigni',
            duration: '1h 56min',
            genre: ['Comedy', 'Drama', 'War'],
            score: 8.6
        },
        {
            title: 'Psycho',
            year: 1960,
            director: 'Alfred Hitchcock',
            duration: '1h 49min',
            genre: ['Horror', 'Mystery', 'Thriller'],
            score: 8.5
        },
        {
            title: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
            director: 'Irvin Kershner',
            duration: '2h 4min',
            genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
            score: 8.8
        },
        {
            title: 'El secreto de sus ojos',
            year: 2009,
            director: 'Juan José Campanella',
            duration: '2h 9min',
            genre: ['Drama', 'Mystery', 'Romance', 'Thriller'],
            score: 8.2
        },
        {
            title: 'Casablanca',
            year: 1942,
            director: 'Michael Curtiz',
            duration: '1h 42min',
            genre: ['Drama', 'Romance', 'War'],
            score: 8.5
        },
        ]

// Genres to populate the select element
const genres = ["Action", "Comedy", "Romance","Drama"];
// using state to keep track of genre selection
const [selectedGenre,setGenre] = useState(genres[0]);
// using state to filter movies based on genre selected.
const [filteredMovies, setFilteredMovies] = useState([]);

// Display loading msg when fetching movies.
const [isLoading, setloading] = useState(false);
// Called  when fetch movies button is clicked.
function fetchMovies()
{
   
   setTimeout(() => {
      setloading(true);
     
    }, 3000); // 3 seconds delay
    setloading(false);
   console.log(selectedGenre);
    setFilteredMovies(movies.filter((movie)=>(movie['genre'].includes(selectedGenre))));   
   
}

// To set the selected genre to the element 
function handleChange(e){
    setloading(false);
        setGenre(e.target.value);
}
    return(
            <div className="select-movie">
                <label>Select a genre: </label>

                <select onChange={handleChange} defaultValue={selectedGenre}>
                    {genres.map((genre,index)=>(<option key={index} name={genre} value={genre}>{genre}</option>))}
                </select><br/>
                {isLoading?<p>Loading.....</p>: <p></p>}
                <button name="fetch" onClick={fetchMovies}>Fetch Movies</button>
                {/*error && <p style={{ color: "red" }}>{error}</p>*/}
                <div>
                {/*TO ITERATE THE MOVIE LIST AND PASS MOVIE OBJ AS PROP TO MOVIECARD COMPONENT */}

                    {isLoading ? filteredMovies.map(
                        (movie,index)=>
                            (<div key={index}>
                                
                                <MovieCard movie={movie}/>
                                
                             </div>)):[]}
                </div>
            </div>
            
    );
}