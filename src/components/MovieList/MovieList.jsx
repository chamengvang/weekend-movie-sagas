import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from './MovieItems.jsx';
import { Link } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <Link to='/addMovie'>
                <button>Add Movie</button>
            </Link>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movieItem={movie}/>
                    );
                })}
            </section>
        </main>
    );
} // END OF MovieList

export default MovieList;