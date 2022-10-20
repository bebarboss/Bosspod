import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "./Home.module.css"

const data = require("../../data/data.json");
const Cards = () => {
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart</h2>

      <div className="row">
        {data.map((catalog) => {
          return (
            <Card style={{ width: "15rem" }} key={catalog.id}>
              <Card.Img variant="top" src={catalog.imgdata} />
              <Card.Body>
                <Card.Title>{catalog.name}</Card.Title>
                <Card.Text>{catalog.des}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
