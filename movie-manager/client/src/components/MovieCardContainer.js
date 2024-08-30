import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  useNavigate } from "react-router-dom";

const MovieCardContainer = ({ movieList, filterValue, favoriteMenu, addToFavorite, deleteFavMovie, handleMovieClick }) => {

  const navigate = useNavigate();

  const filterList = movieList.filter((item) => item.title.toLowerCase().includes(filterValue.toLowerCase()));

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie }});
  }

  if(filterList.length === 0) {
    return (<p>No data available</p>);
  }

  return (
    <Container fluid className="movie-list-container">
      {filterList.map((movie, index) => {
        return (
          <Card key={index}  className="movie-card">
            <Card.Img alt={movie.title} onClick={() => handleClick(movie)} variant="top" src={movie.posterurl} />
            <Card.Body>
              <Card.Text>{movie.title}</Card.Text>
             
              {
                (favoriteMenu) ? <Button onClick={() => deleteFavMovie(movie.id)} className="remove-fav"><i className="bi bi-x"></i> Remove from Favorites</Button> : <Button onClick={() => addToFavorite(movie)} className="add-to-fav"><i className="bi bi-heart-fill"></i> Add to Favorites</Button>
              }
            </Card.Body>
          </Card>
        );
       })}
    </Container>
  );
};

export default MovieCardContainer;
