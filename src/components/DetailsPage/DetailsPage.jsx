import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function DetailsPage () {

    const params = useParams();
    const dispatch = useDispatch();
    const movieID = params.id
    const movieDetails = useSelector(store => store.genres)
    console.log(movieDetails);

    useEffect(() => {

        // THIS WILL SEND THE DATA (MOVIE-ID) TO SAGA ON INDEX.JS
        dispatch({
            type: 'SAGA_FETCH_MOVIES_DETAILS',
            payload: movieID
        })

        return () => {
            dispatch({
                type: 'CLEAR_MOVIES_DETAILS'
            })
        }
    }, [params.id])

    const maping = (genreArray) => {
        for (let genres of genreArray) {
            return genres;
        }
    }
    
    return (
        <div>
            <h1>This is the details page!!!</h1>
            <Link to='/'>
                <button>Back to List</button>
            </Link>
            <h2>Movies Details goes here!!!</h2>
            <img src={movieDetails.poster}></img>
            <p>{movieDetails.title}</p>
            <p>Movie Description: {movieDetails.description}</p>
            <p>Movie Genres: {movieDetails.array_agg}</p>
        </div>
    )
} // END OF DetailsPage. 

export default DetailsPage;