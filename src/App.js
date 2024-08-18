import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Test_Games } from "./components/AllGames";
import RandomPage from "./pages/RandomPage";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import GamePage from "./components/GamePage";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import HomePageFirstDiv from "./components/HomePageFirstDiv";
import FavoriteGame from "./components/FavoriteGame";
import Footer from "./components/Footer";
import ThreeSteps from "./components/ThreeSteps";
import SearchBar from "./components/SearchBar";
import SearchResultsPage from "./components/SearchResultsPage";

function App() {
  const [gamesList, setGamesList] = useState(Test_Games);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (searchQuery) => {
    const results = gamesList.filter(
      (game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.rating.toString().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    navigate('/search-results');
  };

  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Board Games
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/random">
              Random
            </Nav.Link>
          </Nav>

          <SearchBar onSearch={handleSearch} />
        </Container>
      </Navbar>

      <HomePageFirstDiv />

      <ThreeSteps />

      <Container className="mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                gamesList={gamesList}
                setCategoryFilter={setCategoryFilter}
              />
            }
          />
          <Route
            path="/random"
            element={<RandomPage gamesList={gamesList} />}
          />
          <Route
            path="/games/:gameId"
            element={<GamePage gamesList={gamesList} />}
          />
          <Route
            path="/search-results"
            element={<SearchResultsPage searchResults={searchResults} />}
          />
        </Routes>
      </Container>

      <FavoriteGame />
      <Footer />
    </div>
  );
}

export default App;

