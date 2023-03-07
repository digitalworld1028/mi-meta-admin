import React from "react";
import { Dropdown, Stack, Image } from "react-bootstrap";
import "./dropdown.comp.style.scss";

const DropdownComp = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <Dropdown className="dropdown-comp">
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <Stack direction="horizontal" gap={5}>
          <span>{items[0]}</span>
          <Image src={`/icons/arrow-down.png`} />
        </Stack>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item: React.ReactNode, key: number) => {
          return (
            <Dropdown.Item href={`#/action-${key}`} key={key}>
              {item}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { DropdownComp };
