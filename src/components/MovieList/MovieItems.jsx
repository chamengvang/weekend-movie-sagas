function MovieItem ({movieItem}) {
    return (
        <div>
            <h3>{movieItem.title}</h3>
            <img src={movieItem.poster} alt={movieItem.title}/>
        </div>   
    )
}

export default MovieItem;
