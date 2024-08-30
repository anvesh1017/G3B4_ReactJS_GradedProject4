import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  getAllMoviesComing,
  getAllMoviesInTheatres,
  getAllMoviesTopRatedIndia,
  getAllMoviesTopRated,
  getAllMoviesfavourite,
  postFavouriteMovie,
  deleteFavouriteMovie,
} from "../service/movie-data";
import MovieCardContainer from "./MovieCardContainer";
import TopRatedMovies from "./TopRatedMovies";
import NavBarContainer from "./NavBarContainer";
import NotificationToast from "./NotificationToast";
import MovieDetails from "./MovieDetails";

class MovieManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesComing: [],
      favorite: [],
      moviesTheatres: [],
      moviesTopRatedIndia: [],
      moviesTopRated: [],
      currentPath: "",
      searchVal: "",
      notifications: [],
    };
  }

  fetchAllMoviesComing = async () => {
    const response = await getAllMoviesComing();

    this.setState({
      moviesComing: response,
    });
    return response;
  };

  fetchAllMoviesInTheatres = async () => {
    const response = await getAllMoviesInTheatres();
    this.setState({
      moviesTheatres: response,
    });
    return response;
  };

  fetchAllMoviesTopRatedIndian = async () => {
    const response = await getAllMoviesTopRatedIndia();
    this.setState({
      moviesTopRatedIndia: response,
    });
    return response;
  };

  fetchAllMoviesTopRated = async () => {
    const response = await getAllMoviesTopRated();
    this.setState({
      moviesTopRated: response,
    });
    return response;
  };

  fetchAllMoviesFavourites = async () => {
    const response = await getAllMoviesfavourite();
    this.setState({
      favorite: response,
    });
    return response;
  };

  postFavoriteMovie = async (movie) => {
    const isMovieExist =
      this.state.favorite.filter((item) => movie.id === item.id).length === 0;

    if (isMovieExist) {
      const response = await postFavouriteMovie(movie);

      const notify = {
        id: Date.now(),
        headerMsg: "Success",
        msg: "Successfully added to favorite",
      };

      this.setState({
        favorite: [...this.state.favorite, response],
        notifications: [...this.state.notifications, notify],
      });

      return response;
    }

    const errorNotify = {
      id: Date.now(),
      headerMsg: "Error",
      msg: "Already added in favorite",
    };

    this.setState({
      notifications: [...this.state.notifications, errorNotify],
    });
  };

  deletefavMovie = async (movieId) => {
    const response = await deleteFavouriteMovie(movieId);

    const filteredList = this.state.favorite.filter(
      (movie) => movie.id !== response.id
    );

    const notify = {
      id: Date.now(),
      headerMsg: "Success",
      msg: "Successfully removed from favorite",
    };

    this.setState({
      favorite: filteredList,
      notifications: [...this.state.notifications, notify],
    });

    return response;
  };

  handleSearchInput = (val) => {
    this.setState({
      searchVal: val,
    });
  };

  handleToasts = (id) => {
    const toast = this.state.notifications.filter((toast) => toast.id !== id);

    this.setState({
      notifications: toast,
    });
  };

  componentDidMount() {
    this.fetchAllMoviesComing();
    this.fetchAllMoviesInTheatres();
    this.fetchAllMoviesTopRated();
    this.fetchAllMoviesTopRatedIndian();
    this.fetchAllMoviesFavourites();
    console.log("component update");
  }

  render() {

    return (
      <Router>
        <Container fluid>
          <h1>Movie Manager</h1>

          <NavBarContainer searchInput={this.handleSearchInput} />
          <NotificationToast
            displayToast={this.state.notifications}
            setDisplayToast={this.handleToasts}
          />
        </Container>

        <Container className="mt-4" fluid>
          <Routes>
            <Route
              path="/MoviesComing"
              element={
                <MovieCardContainer
                  filterValue={this.state.searchVal}
                  addToFavorite={this.postFavoriteMovie}
                  movieList={this.state.moviesComing}
                  handleMovieClick={this.movieClick}
                />
              }
            />
            <Route
              path="/MoviesInTheatres"
              element={
                <MovieCardContainer
                  filterValue={this.state.searchVal}
                  addToFavorite={this.postFavoriteMovie}
                  movieList={this.state.moviesTheatres}
                  handleMovieClick={this.movieClick}
                />
              }
            />
            <Route
              path="/TopRated"
              element={
                <TopRatedMovies
                  filterValue={this.state.searchVal}
                  indiaList={this.state.moviesTopRatedIndia}
                  list={this.state.moviesTopRated}
                  addToFavorite={this.postFavoriteMovie}
                  handleMovieClick={this.movieClick}
                />
              }
            />
            <Route
              path="/Favorites"
              element={
                <MovieCardContainer
                  filterValue={this.state.searchVal}
                  movieList={this.state.favorite}
                  deleteFavMovie={this.deletefavMovie}
                  favoriteMenu={true}
                  handleMovieClick={this.movieClick}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route
              path="/"
              element={
                <MovieCardContainer
                  filterValue={this.state.searchVal}
                  addToFavorite={this.postFavoriteMovie}
                  movieList={this.state.moviesComing}
                  handleMovieClick={this.movieClick}
                />
              }
            />
          </Routes>
        </Container>
      </Router>
    );
  }
}

export default MovieManager;
