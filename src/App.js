import { useState } from "react";
import HomePage from "./components/HomePage";
import { Test_Games } from "./components/AllGames";
import RandomPage from "./components/RandomPage";
import { Link, Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import HomePageFirst from "./components/HomePageFirst";
import FavoriteGame from "./components/FavoriteGame";

function App() {
  const [gamesList, setGamesList] = useState(Test_Games);
  const [categoryFilter, setCategoryFilter] = useState("All");

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
        </Container>
      </Navbar>

      <HomePageFirst />

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
        </Routes>
      </Container>

      <FavoriteGame />

    </div>
  );



}

export default App;
