import { useEffect, useState} from "react";
import { Col, Container, Row } from "reactstrap";
import FilterForm from "../components/Form";
import Game from '../components/Game';
import axios from "axios";




const VideoGames = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="4">
            <FilterForm />
          </Col>
          <Col>
            <Game />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoGames;
