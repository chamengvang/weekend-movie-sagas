import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function DetailsPage () {

    const params = useParams();
    const dispatch = useDispatch();
    const movieID = params.id
    const movieDetails = useSelector(store => store.genres)


    useEffect(() => {

        dispatch({
            type: 'SAGA_FETCH_MOVIES_DETAILS',
            payload: movieID
        })

        return () => {
            dispatch({
                type: 'CLEAR_MOVIES_DETAILS'
            })
        }
    }, [movieID])
    
    return (
        <div>
            <h1>This is the details page!!!</h1>
            <Link to='/'>
                <button>Back to List</button>
            </Link>
            <h2>Movies Details goes here!!!</h2>
            <p>{movieDetails}</p>
        </div>
    )
} // END OF DetailsPage. 

export default DetailsPage;