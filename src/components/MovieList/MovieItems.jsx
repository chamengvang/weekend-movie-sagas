import { useHistory } from 'react-router-dom'

function MovieItem ({movieItem}) {

    const history = useHistory()

    const handleDetailsClick = () => {
      console.log(movieItem.id)

      history.push(`/detailsPage/${movieItem.id}`)
    }

    return (
        <div>
            <h3>{movieItem.title}</h3>
            <img onClick={handleDetailsClick} 
                src={movieItem.poster} 
                alt={movieItem.title}/>
        </div>   
    )
}

export default MovieItem;
