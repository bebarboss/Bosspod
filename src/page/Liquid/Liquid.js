import React, { useState } from "react";
import style from "./Liquid.module.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const data =require('../../data/data-liquid.json')
const Liquid = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);
  return (
    <div className={style.container}>
      <div>coiiggiw</div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item >
            <div className={style.conItem}>
            {data.slice(0,4).map((catalog) => {
          return (
            <Card style={{ width: "240px",border:"none", height:"360px" }} key={catalog.id} className="mx-0 mt-0 card_style">
              <Card.Img variant="top" src={catalog.imgdata} />
              <Card.Body>
                <div style={{fontSize:"15px"}}> {catalog.name}</div>
                <div style={{fontSize:" 12px"}} >{catalog.des}</div>
                
              </Card.Body>
            </Card>
          );
        })}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.en.kku.ac.th/web/wp-content/uploads/2022/01/BG-1.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://png.pngtree.com/thumb_back/fh260/background/20210510/pngtree-abstract-light-effect-explosion-ray-background-image_697103.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Liquid;
