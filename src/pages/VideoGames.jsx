import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import Game from "../components/Game";
import axios from "axios";
import { SortInput, TextInput } from "../components/Form";
import "../App.css";

const baseURL =
  "https://adaorachi.github.io/esetech-assessment-api/game-data.json";

const VideoGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sorter, setSorter] = useState("");

  const handleFilter = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      await axios
        .get(`${baseURL}`)
        .then((response) => {
          setGames(response.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    const timer = setTimeout(() => {
      fetchGames();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredData = games.filter((game) =>
    game.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSort = (e) => {
    setSorter(e.target.value);
  };

  const sortedData = filteredData.sort((a, b) => {
    if (sorter === "Rating") {
      return b.rating - a.rating;
    } else if (sorter === "Release Date") {
      return b.first_release_date - a.first_release_date;
    }
    return null;
  });

  const clearFilter = () => {
    setQuery("");
    setSorter("");
  };

  return (
    <>
      <Container style={{ paddingTop: "4rem" }}>
        <Row className="">
          <Col xs="3" className="">
            <Container id="formContainer">
              <h3>Filter Results</h3>
              <TextInput value={sorter} onChange={handleFilter} />
              <SortInput onChange={handleSort} />
              <Button id="clearBtn" className="float-end" onClick={clearFilter}>
                Clear
              </Button>
            </Container>
          </Col>
          <Col
            id="gameListContainer"
            style={{ height: "92vh", overflowY: "scroll", overflowX: "hidden" }}
          >
            {loading ? <Spinner id="spinner">Loading...</Spinner> : false}

            {!games ? (
              <>
                <h1>No Games</h1>
              </>
            ) : (
              sortedData.map((game) => <Game game={game} key={game.id} />)
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoGames;
