import React from 'react';
import MovieCardContainer from './MovieCardContainer';
import { useLocation } from 'react-router-dom';

const TopRatedMovies = ({indiaList, list, filterValue, addToFavorite, handleMovieClick}) => {
    const location = useLocation();
    const currentPath = location.pathname + location.search;
    console.log("current path:", currentPath);

    let movieList = list;

    if (currentPath.includes("india")) {
        movieList = indiaList;
    }

    return (<MovieCardContainer filterValue={filterValue} movieList={movieList} addToFavorite={addToFavorite} handleMovieClick={handleMovieClick} />)
}

export default TopRatedMovies;