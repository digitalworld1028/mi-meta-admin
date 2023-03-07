import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DropItem } from "./DropItem";
import "./drops.style.scss";

import { Parallax } from "react-parallax";
import * as components from "../../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/home.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const UpcomingDrops = () => {
  return (
    <Parallax bgImage={"/images/nfts-bg-dark-parallax.png"} strength={700}>
      <div style={{ height: 700 }}>
        <Container className="p-5" fluid>
          <h1 className="title">
            <span className="font-bold">UPCOMING</span> DROPS
          </h1>
          <Row className="p-3 nft-carousel">
            <Col md={10} className="m-auto">
              <Row>
                <Carousel responsive={responsive}>
                  {new Array(10).fill(2).map((item: number, key: number) => {
                    return (
                      <div style={{ padding: "12px" }} key={key}>
                        <components.NFTCard id={key + 1} />
                      </div>
                    );
                  })}
                </Carousel>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Parallax>
  );
};

export { UpcomingDrops };
