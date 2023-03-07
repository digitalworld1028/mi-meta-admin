import { Container, Row, Col, Button, Stack, Image, ListGroup } from "react-bootstrap";
import "../styles/collection.scss";
import { CollectionItem, CollectionItemsPane, CollectionIActivityPane } from "../components";
import { useState } from "react";

function Collection() {
  const setshowpane = (val: any) => {
    console.log(val);
    setItemTab(val);
  };

  const [itemTab, setItemTab] = useState(true);

  return (
    <Container className="collection p-0" fluid>
      <Row className="collection-landing">
        <div className="collection-landing-bg" />
        <div className="collection-badge" />
      </Row>
      <Row className="collection-description">
        <h1>LoopingRings</h1>
        <p>
          Created By: <span className="text-info mx-2">Monster Magnet</span>
          <Button variant="danger" className="mx-2">
            <Image src="/icons/twitter.svg" width={15} height={15} />
          </Button>
          <Button variant="danger">
            <Image src="/icons/discord.svg" width={15} height={15} />
          </Button>
        </p>
        <Stack direction="horizontal" className="collection-params">
          <Stack direction="horizontal">
            <div>
              <h1>333</h1>
              <p>items</p>
            </div>
            <div>
              <h1>285</h1>
              <p>owners</p>
            </div>
          </Stack>
          <Stack direction="horizontal">
            <div>
              <h1>
                <Image src={`/icons/eth.png`} className="mb-1" />
                <span className="eth-amount-span" style={{ display: "inline-block" }}>
                  0.32
                </span>
              </h1>
              <p>floor price</p>
            </div>
            <div>
              <h1>
                <Image src={`/icons/eth.png`} className="mb-1" />
                <span className="eth-amount-span" style={{ display: "inline-block" }}>
                  30.6
                </span>
              </h1>
              <p>volume trated</p>
            </div>
          </Stack>
        </Stack>
      </Row>

      <Row className="collection-tab">
        <Stack direction="horizontal">
          <div className="tab-pane-item" onClick={() => setshowpane(true)}>
            {itemTab ? <Image src="/icons/item.png" /> : <Image src="/icons/item_gray.png" />}
            <p className={itemTab ? "active" : ""}>Items</p>
          </div>
          <div className="tab-pane-item" onClick={() => setshowpane(false)}>
            {itemTab ? (
              <Image src="/icons/Graph Poly.png" />
            ) : (
              <Image src="/icons/Graph Poly_blue.png" />
            )}
            <p className={!itemTab ? "active" : ""}>Activity</p>
          </div>
        </Stack>
      </Row>
      {itemTab ? <CollectionItemsPane /> : <CollectionIActivityPane />}
    </Container>
  );
}

export { Collection };
