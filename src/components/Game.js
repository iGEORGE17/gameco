import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
import "../App.css";


const Game = () => {
  return (
    <>
      <div>
        <Card color="white" id="card">
          <CardBody>
            <CardTitle tag="h5">kskf</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Game;
