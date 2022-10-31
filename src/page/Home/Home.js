import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "./Home.module.css"

const data = require("../../data/data-liquid.json");
const Cards = () => {
  return (
    <div className="container mt-3">
      <h2 className="text-center">น้ำยาพอตไฟฟ้า</h2>

      <div className="row">
        {data.map((catalog) => {
          return (
            <Card style={{ width: "18rem",border:"none" }} key={catalog.id} className="mx-2 mt-4 card_style">
              <Card.Img variant="top" src={catalog.imgdata} />
              <Card.Body>
                <Card.Title>{catalog.name}</Card.Title>
                <Card.Text >{catalog.des}</Card.Text>
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
