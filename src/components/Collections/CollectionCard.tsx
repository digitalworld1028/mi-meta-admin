import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import "./collections.style.scss";

function CollectionCard({ id }: { id: number }) {
  const navigate = useNavigate();
  const showDetail = (id: number) => {
    console.log(id);
    navigate("/collection");
  };
  return (
    // <Link to="/detail">
    <Card className="collection-card" onClick={() => showDetail(id)}>
      <Card.Img variant="top" src={`/images/nft/${id}.png`} />
      <Card.Body className="text-center">
        <Card.Title className="text-center">Looping Rings</Card.Title>
        <Card.Text className="bold text-center">
          by <span className="text-info">MonsterMagnet</span>
        </Card.Text>
        <Image src={`/avatars/user-1.png`} className="m-auto" fluid />
        <p className="text-center">
          Creativedrops presents a limited run of 500 unique pieces painted by blind artists
        </p>
      </Card.Body>
    </Card>
    // </Link>
  );
}

export { CollectionCard };
