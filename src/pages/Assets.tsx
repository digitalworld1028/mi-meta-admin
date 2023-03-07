import { Container } from "react-bootstrap";
import "../styles/assets.scss";
import { CollectionItem, CollectionItemsPane, CollectionIActivityPane } from "../components";
import { useState } from "react";

function Assets() {
  return (
    <Container className="collection" fluid>
      <div className="mt-5 pt-5">
        <CollectionItemsPane type="assets" />
      </div>
    </Container>
  );
}

export { Assets };
