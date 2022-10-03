import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './DetailsPage.css'

// MUI IMPORT
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, ListItem } from '@mui/material';

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
    
    return (
        <div className='detailDiv'>
            <Card sx={{ maxWidth: 800 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    src={movieDetails.poster} 
                    alt={movieDetails.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {movieDetails.title}
                        </Typography>
                        <Typography variant="body2">
                            {movieDetails.description}
                        </Typography>
                        <Typography variant="h5">
                            Genres: {movieDetails.array_agg}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                        <Link to='/'>
                            <Button variant="contained" size="small" color="primary">
                                Back to List
                            </Button>
                        </Link>
                    
                </CardActions>
            </Card>
        </div>
    )
} // END OF DetailsPage. 

export default DetailsPage;