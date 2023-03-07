import { Card, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./collections.style.scss";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

function CollectionItem({ id }: { id: number }) {
  const navigate = useNavigate();
  return (
    <Card className="collection-card" onClick={() => navigate("/detail")}>
      <Card.Img variant="top" src={`/images/collection/Image (${id + 5}).png`} />
      <Card.Body>
        <Card.Text className="bold">Collection Name</Card.Text>
        <Stack
          direction="horizontal"
          style={{ alignItems: "flex-start!important" }}
          className="align-items-start justify-content-between"
        >
          <div>
            <p>#MM-1357</p>
          </div>
          <div>
            <p style={{ textAlign: "right" }}>Price</p>
            <Stack direction="horizontal" className="align-items-start justify-content-between">
              <img className="ms-4" src="icons/eth.png" width={20} />
              <span>78.76</span>
            </Stack>
            <div className="collection-item-favorite" style={{ textAlign: "right" }}>
              {/* <img className="ms-4" src="icons/Heart.svg" width={20}/> */}
              <Heart style={{ width: 20 }} />
              <span>201</span>
            </div>
          </div>
        </Stack>
        {/* <Card.Text className="font-bold">#MM-1357</Card.Text>

        <Card.Text className="bold">Price</Card.Text> */}
      </Card.Body>
    </Card>
  );
}

export { CollectionItem };
