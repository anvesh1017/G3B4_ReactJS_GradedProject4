import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Table  } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import ImageModal from "./ImageModal";

const MovieDetails = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const movie = location.state?.movie || {};

    const [show, setShow] = useState(false);

    const handleClick = () => {
        navigate("/");
    }

    if (movie.length === 0) {
        return null;
    }
    return (
        <Container fluid>
        <div className="text-start mb-4">
            <Button  onClick={() => handleClick()}  className="back-to-home"  > <i className="bi bi-arrow-left"></i> Back to home</Button>
        </div>

        <Row>
            <Col xs={12} md={6} lg={3}>
                <Image onClick={() => setShow(true)} alt={movie.title} src={movie.posterurl} rounded />
            </Col>
            <Col xs={12} md={6} lg={9}>
                <h3 className="text-start" >{movie.title}</h3>
                <Table className="text-start">
                    <tbody>
                    <tr>
                        <td  style={{ width: '30%' }}>Imdb rating</td>
                        <td  style={{ width: '70%' }}>{movie.imdbRating}</td>
                    </tr>
                    <tr>
                        <td>Content rating</td>
                        <td>{movie.contentRating}</td>
                    </tr>
                    <tr>
                        <td>Average rating</td>
                        <td>{movie.averageRating}</td>
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td>{movie.duration}</td>
                    </tr>
                    <tr>
                        <td>Genres</td>
                        <td>{movie.genres.join(',')}</td>
                    </tr>
                    <tr>
                        <td>Actors</td>
                        <td>{movie.actors.join(',')}</td>
                    </tr>
                    <tr>
                        <td>Release Date</td>
                        <td>{movie.releaseDate}</td>
                    </tr>
                    <tr>
                        <td>Story Line</td>
                        <td>{movie.storyline}</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>

        <ImageModal showModal={show} handleModalClose={() => setShow(false)} imageSrc={movie.posterurl} title={movie.title}  />
        
        </Container>
    );
}

export default MovieDetails;