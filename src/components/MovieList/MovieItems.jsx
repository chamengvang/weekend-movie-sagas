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
        <div className='movieItems'>
            <Card className='movieItem' sx={{ maxWidth: 300 , minWidth:300 }}>
                <CardActionArea onClick={handleDetailsClick} >
                    <CardMedia
                        className='images1'
                        component="img"
                        src={movieItem.poster} 
                        alt={movieItem.title}
                        />
                    <CardContent>
                        <Typography variant="subtitle1">
                            <h3>{movieItem.title}</h3>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>   
    )
}

export default MovieItem;
