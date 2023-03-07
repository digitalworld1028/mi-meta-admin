import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Stack, Image } from "react-bootstrap";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import "./nft-card.style.scss";

function NFTCard({ id }: { id: number }) {
  const navigate = useNavigate();
  const showDetail = (id: number) => {
    console.log(id);
    navigate("/collection");
  };
  
  return (
    // <Link to="/detail">
    <Card className="nft-card" onClick={() => showDetail(id)}>
      <Card.Img variant="top" src={`/images/nft/${id}.png`} />
      <Card.Body>
        <Card.Text>1 Edition minted</Card.Text>
        <Card.Title>NFT Title</Card.Title>
        <Card.Text className="bold">
          Supporting description for the card goes here like this.
        </Card.Text>
        <Card.Text className="bold">
          Price
          <img className="ms-4" src="icons/eth.png" />
          <span>78.76</span>
        </Card.Text>
        <Card.Text>
          <Stack direction="horizontal" className="" gap={1}>
            <Image src="/icons/avatar-1.svg" />
            <Stack direction="horizontal" className="w-100 justify-content-between">
              <Stack gap={1}>
                <h5>Owner</h5>
                <p>aldo</p>
              </Stack>
              <Heart className="heart-icon" />
            </Stack>
          </Stack>
        </Card.Text>
      </Card.Body>
    </Card>
    // </Link>
  );
}

export { NFTCard };
