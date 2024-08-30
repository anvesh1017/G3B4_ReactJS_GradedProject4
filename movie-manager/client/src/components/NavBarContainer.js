import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function NavBarContainer({searchInput}) {
  const location = useLocation();
  const currentPath = (location.pathname + location.search).length > 1 ? (location.pathname + location.search) : "/MoviesInTheatres";

  if(currentPath.includes('/movie/')) {
    return null;
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            variant="underline" 
            navbarScroll
            activeKey={currentPath}
          >
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/MoviesInTheatres"
                eventKey="/MoviesInTheatres"
              >
                Movies In Theatres
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/MoviesComing" eventKey="/MoviesComing">
                Coming Soon
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/TopRated?category=india"
                eventKey="/TopRated?category=india"
              >
                Top Rated Indian
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/TopRated?category=global"
                eventKey="/TopRated?category=global"
              >
                Top Rated Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Favorites" eventKey="/Favorites">
                Favorites
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => searchInput(e.target.value)}
            />
            <Button variant="primary"><i className="bi bi-search"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarContainer;
