import { Card } from "react-bootstrap";

function DropItem({ id }: { id: number }) {
  return (
    <Card className="text-white">
      <Card.Img src={`/images/drops/${id.toString()}.png`} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Supporting description for the card goes here like this.</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export { DropItem };
