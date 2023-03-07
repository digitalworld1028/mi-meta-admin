import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CollectionCard } from "../components";
import "../styles/discover.scss";

const Discover = () => {
  const { category } = useParams();

  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <Container className="discover p-0" fluid>
      <Row className="discover-landing">
        <div className="discover-landing-bg" />
      </Row>
      <Row className="m-auto p-2">
        <Col md={5} className="m-auto text-center mt-4">
          <h1>
            Discover <span className="text-capitalize">{category}</span>
          </h1>
          <p className="text-center">
            Bektig löras hjärtslagslag epiledes. Eurovis jåmän på syskapet. Poliism kropos monon
            fådede. Suligt posaskapet, en sul ans fåde. Polyskade pregitude larar remyrar.
            Transosmos päföss i prest jag teren. semin.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <div className="p-4">
          <h1 className="text-center">
            Trending <span className="text-capitalize">{category}</span>
          </h1>
        </div>
        <Col lg={10} className="m-auto">
          <Row className="justify-content-center">
            {new Array(16).fill(1).map((_, key: number) => {
              return <CollectionCard id={key + 1} key={key} />;
              // return (
              //   <Col lg={3} md={4} sm={6} key={key}>
              //     <CollectionCard id={key + 1} />
              //   </Col>
              // );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export { Discover };
