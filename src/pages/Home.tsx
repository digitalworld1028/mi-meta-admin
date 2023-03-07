import React from "react";
import { Parallax } from "react-parallax";
import { Container, Row, Col } from "react-bootstrap";
import * as components from "../components";
import { CategoryGroup } from "../components";
// import image from './nfts-bg-dark-parallax.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/home.scss";

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

const Home = () => {
  return (
    <Row className="home">
      <components.Landing />
      <components.TopShelfDrops />
      <components.CollectionList />
      <components.UpcomingDrops />
      <CategoryGroup />
    </Row>
  );
};

export { Home };
