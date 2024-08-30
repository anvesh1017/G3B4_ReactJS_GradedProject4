import axios from "axios";

const getAllMoviesComing = async () => {
  const getMoviesUrl = "http://localhost:4000/movies-coming";

  // GET Request
  const response = await axios.get(getMoviesUrl);
  return response.data;
};

const getAllMoviesTopRatedIndia = async () => {
  const getMoviesUrl = "http://localhost:4000/top-rated-india";

  // GET Request
  const response = await axios.get(getMoviesUrl);
  return response.data;
};

const getAllMoviesInTheatres = async () => {
  const getMoviesUrl = "http://localhost:4000/movies-in-theaters";

  // GET Request
  const response = await axios.get(getMoviesUrl);
  return response.data;
};

const getAllMoviesTopRated = async () => {
  const getMoviesUrl = "http://localhost:4000/top-rated-movies";
  // GET Request
  const response = await axios.get(getMoviesUrl);
  return response.data;
};

const getAllMoviesfavourite = async () => {
  const getMoviesUrl = "http://localhost:4000/favourite";

  // GET Request
  const response = await axios.get(getMoviesUrl);
  return response.data;
};

const postFavouriteMovie = async (movie) => {
  const postMovieUrl = "http://localhost:4000/favourite";

  const response = await axios.post(postMovieUrl, movie, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

const deleteFavouriteMovie = async (id) => {
  const postMovieUrl = `http://localhost:4000/favourite/${id}`;

  const response = await axios.delete(postMovieUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export {
  getAllMoviesComing,
  getAllMoviesInTheatres,
  getAllMoviesTopRatedIndia,
  getAllMoviesTopRated,
  getAllMoviesfavourite,
  postFavouriteMovie,
  deleteFavouriteMovie,
};
