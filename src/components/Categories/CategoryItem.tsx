import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Stack, Popover, OverlayTrigger } from "react-bootstrap";
import { ReactComponent as Warn } from "../../assets/icons/warn.svg";
import { ReactComponent as Lock } from "../../assets/icons/lock.svg";
import { ReactComponent as Dot } from "../../assets/icons/dot.svg";
import { useDetectClickOutside } from "react-detect-click-outside";

const CategoryItem = ({ id, type }: any) => {
  const navigate = useNavigate();
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging. right?
      </Popover.Body>
    </Popover>
  );
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const openMenu = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(!show);
    setCount(Date.now());
  };
  const closeMenu = () => {
    const element = document.getElementById("menu_pop");
    if (element !== null) {
      console.log("sdf");
      setShow(false);
    }
  };

  const ref = useDetectClickOutside({ onTriggered: closeMenu });
  return (
    <div className="category-item">
      <Card className="text-white m-auto category-item-card">
        <Card.Img src={`/images/category/${id.toString()}.png`} alt="Card image" />
        {/* <Card.ImgOverlay> */}
        <Card.Title style={{ marginTop: "-100px" }} className="px-3">
          Card title
        </Card.Title>
        <Card.Text className="px-3">
          Supporting description for the card goes here like this.
        </Card.Text>
        {/* </Card.ImgOverlay> */}
        {type === "collection" && (
          <div className="px-3 ">
            <Stack direction="horizontal" className="align-items-center justify-content-start">
              <span className="category-item-icon" style={{ width: 25 }}>
                <Warn />
              </span>
              <span className="category-item-icon" style={{ width: 25 }}>
                <Lock />
              </span>
              {/* <OverlayTrigger trigger="click" placement="top-start" overlay={popover}> */}
              <span className="category-item-icon" style={{ width: 30 }} onClick={openMenu}>
                <Dot />
              </span>
              {/* </OverlayTrigger> */}
            </Stack>
          </div>
        )}
      </Card>
      {show && (
        <div id="menu_pop" className="menu-pop px-2 py-2" ref={ref}>
          <p className="mb-0 py-1 px-3 menu-pop-item text-dark-light">Make profile picture</p>
          <p className="mb-0 py-1 px-3 menu-pop-item text-dark-light">Sell</p>
          <p className="mb-0 py-1 px-3 menu-pop-item text-dark-light">Hide</p>
          <p className="mb-0 py-1 px-3 menu-pop-item text-dark-light">Burn</p>
          <p className="mb-0 py-1 px-3 menu-pop-item text-dark-light">Transfer</p>
          <p className="mb-0 py-1 px-3 menu-pop-item text-dark-light">Share</p>
          <p className="mb-0 py-1 px-3 menu-pop-item text-dark-light">Open origilan on IPFS</p>
          <p className="mb-0 py-1 px-3 menu-pop-item text-dark-light">View details</p>
        </div>
      )}
    </div>
  );
};

export { CategoryItem };
