import { useHistory } from 'react-router-dom'

// MUI IMPORT 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MovieItem ({movieItem}) {

    const history = useHistory()

    const handleDetailsClick = () => {
      console.log(movieItem.id)

      history.push(`/detailsPage/${movieItem.id}`)
    }

    return (
        <div className='movieItem'>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={handleDetailsClick} >
                    <CardMedia
                        component="img"
                        height="auto"
                        src={movieItem.poster} 
                        alt={movieItem.title}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h3>{movieItem.title}</h3>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>   
    )
}

export default MovieItem;
