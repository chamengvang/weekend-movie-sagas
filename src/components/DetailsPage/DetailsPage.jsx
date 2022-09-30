import { Link } from 'react-router-dom';

function DetailsPage () {
    
    return (
        <div>
            <h1>This is the details page!!!</h1>
            <Link to='/'>
                <button>Back to List</button>
            </Link>
        </div>
    )
} // END OF DetailsPage. 

export default DetailsPage;