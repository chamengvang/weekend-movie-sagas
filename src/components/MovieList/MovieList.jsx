import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from './MovieItems.jsx';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
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