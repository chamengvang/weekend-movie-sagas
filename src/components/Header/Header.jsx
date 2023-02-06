import './Header.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header () {
    return (
        <div className='headerDiv'>
            <h1>The Movies Saga!</h1>
            {/* <Link to='/'>
                <Button variant="contained">Home Page</Button>
            </Link>
            <Link to='/addMovie'>
                <Button variant="contained">Add Movie</Button>
            </Link> */}
        </div>
    )
}

export default Header;