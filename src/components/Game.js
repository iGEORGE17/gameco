import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Row,
  Col,
  Container,
} from "reactstrap";
import "../App.css";

const Game = ({ game: { name, first_release_date, summary, rating } }) => {
  return (
    <>
      <Card
        className="mb-3"
        style={{ backgroundColor: "#182c47", color: "#fff" }}
      >
        <CardBody className="m-0 p-0">
          <Row style={{ minHeight: "200px" }}>
            <Col xs={2}>
              <Container id="card_img" />
            </Col>
            <Col className="py-2">
              <CardTitle tag="h5" style={{ color: "lightgrey" }}>
                {name}
              </CardTitle>
              <CardSubtitle
                className="mb-2"
                style={{ fontSize: "14px", color: "silver" }}
              >
                Release Date:{" "}
                {new Date(first_release_date).toLocaleDateString("en-GB")}
              </CardSubtitle>
              <Row>
                <Col xs={11}>
                  <CardText className="py-1" style={{ textWrap: "wrap" }}>
                    {summary}
                  </CardText>
                </Col>
                <Col>
                  <span id="rating">{parseInt(rating)}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Game;
