
export default function MovieCard(props){
    let genres = props.movie.genre;

    return(
    <div className="movie-card">
        <p> Movie: <span className="font-effect-outline">{props.movie.title}</span> </p>
        <p> Year :<span className="font-effect-outline" >{props.movie.year}</span></p>
        <p>Director: <span className="font-effect-outline">{props.movie.director}</span></p>
        <p>Duration: <span className="font-effect-outline">{props.movie.duration}</span></p>
        <p>Genre: {genres.map((item,index)=>(<span className="font-effect-outline"  key={index}>{item}</span>))}</p>
    </div>)
}