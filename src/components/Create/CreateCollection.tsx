import { useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  Card,
  Stack,
  Image,
  FormControl,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { DropdownComp } from "../";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const CreateCollection = () => {
  const [listMarket, setListMarket] = useState(true);
  const [avatarFile, setAvatarFile] = useState("");
  const [collectionFile, setCollectionFile] = useState("");
  const [bannerFile, setBannerFile] = useState("");
  const [modal, setModal] = useState(false);
  const [itemData, setItemData] = useState([
    { type: "Boswell", name: "Ears" },
    { type: "Rollo", name: "Sword" },
    { type: "Rollo", name: "Shield" },
  ]);
  const [bufferItemData, setBufferItemData] = useState([
    { type: "Boswell", name: "Ears" },
    { type: "Rollo", name: "Sword" },
    { type: "Rollo", name: "Shield" },
  ]);

  const handleChange = () => {
    console.log("handle");
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const editHandler = (e: any, i: number, type: string) => {
    const itemData = bufferItemData;
    if (type === "type") {
      itemData[i].type = e.target.value;
    } else {
      itemData[i].name = e.target.value;
    }
    setBufferItemData([...itemData]);
  };

  const saveHandler = () => {
    setBufferItemData([...itemData]);
    setModal(false);
  };

  const cancelHandler = () => {
    setItemData([...bufferItemData]);
    setModal(false);
  };

  const onFileChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      console.log(fileReader.result);
      if (fileReader.result !== null) {
        setAvatarFile(fileReader.result.toString());
      }
    };
    console.log(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  const avatarSelect = () => {
    const avatarInput = document.getElementById("avatar_input");
    avatarInput?.click();
    console.log(avatarInput);
  };

  const avatarChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      console.log(fileReader.result);
      if (fileReader.result !== null) {
        setAvatarFile(fileReader.result.toString());
      }
    };
    console.log(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  const collectionSelect = () => {
    const collectionInput = document.getElementById("collection_input");
    collectionInput?.click();
  };

  const collectionChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      console.log(fileReader.result);
      if (fileReader.result !== null) {
        setCollectionFile(fileReader.result.toString());
      }
    };
    console.log(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  const bannerSelect = () => {
    const bannerInput = document.getElementById("banner_input");
    bannerInput?.click();
  };

  const bannerChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      console.log(fileReader.result);
      if (fileReader.result !== null) {
        setBannerFile(fileReader.result.toString());
      }
    };
    console.log(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  return (
    <Row className="create-nft justify-content-center mt-5">
      <Col lg={9} md={12}>
        <h1 className="mt-4">Create a Collection</h1>
        <Row>
          <Col lg={12}>
            <div className="create-nft-trait">
              <h2 className="mt-4">Collection logo</h2>
              <p className="mb-0">This image will also be used for navigation.</p>
              <p>We recommend 350x350.</p>
              <div
                style={{
                  width: 200,
                  height: 200,
                  border: "1px solid #979797",
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={avatarSelect}
              >
                <img
                  src={avatarFile === "" ? "/Icons/Image.png" : avatarFile}
                  style={avatarFile === "" ? { width: 50 } : { width: 300 }}
                />
                <input
                  type="file"
                  id="avatar_input"
                  style={{ display: "none" }}
                  onChange={avatarChange}
                />
              </div>
              <h2 className="mt-4">Collection image</h2>
              <p>
                Set the image that you want featured on the homepage, category page, or collections
                page. We recommend 600x400px.
              </p>
              <div
                style={{
                  width: 450,
                  height: 300,
                  border: "1px solid #979797",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={collectionSelect}
              >
                <img
                  src={collectionFile === "" ? "/Icons/Image.png" : collectionFile}
                  style={collectionFile === "" ? { width: 50 } : { width: 450, height: 300 }}
                />
                <input
                  type="file"
                  id="collection_input"
                  style={{ display: "none" }}
                  onChange={collectionChange}
                />
              </div>
              <h2 className="mt-4">Banner image</h2>
              <p>
                Set the image that you want featured on the homepage, category page, or collections
                page. We recommend 600x400px.
              </p>
              <div
                style={{
                  width: "100%",
                  height: 300,
                  border: "1px solid #979797",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={bannerSelect}
              >
                <img
                  src={bannerFile === "" ? "/Icons/Image.png" : bannerFile}
                  style={bannerFile === "" ? { width: 50 } : { width: "100%", height: 300 }}
                />
                <input
                  type="file"
                  id="banner_input"
                  style={{ display: "none" }}
                  onChange={bannerChange}
                />
              </div>
              <h2 className="mt-4">Collection name</h2>
              <Row>
                <Col lg={6} md={12}>
                  <FormControl placeholder="Enter name" />
                </Col>
              </Row>
              <h2 className="mt-4">URL</h2>
              <p>
                Set a custom URL for your collection. May only contain lowercase letters, numbers,
                and hyphens.
              </p>
              <Row>
                <Col lg={6} md={12}>
                  <FormControl placeholder="www.mi-meta.io/collection/collection-name" />
                </Col>
              </Row>
              <h2 className="mt-4">Description</h2>
              <p>
                The description will be included on the item's detail page under the image. Markdown
                syntax is supported.
              </p>
              <FormControl
                as="textarea"
                rows={5}
                placeholder="Enter a detailed description of your item"
              />
              <h2>
                <a
                  href="https://www.markdownguide.org/getting-started"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  className="text-info"
                  rel="noreferrer"
                >
                  Markdown
                </a>{" "}
                syntax is supported.
              </h2>
              <Row className="mt-4">
                <Col lg={6} md={12}>
                  <h2>Category</h2>
                  <p>This is the category where your item will appear</p>
                  <DropdownComp items={["Choose category", "b"]} />
                </Col>
                <Col lg={6} md={12}>
                  <h2>Royalties</h2>
                  <p>Suggested royalties:0%, 10% 20%, 30%, Max 50%</p>
                  <FormControl placeholder="0" />
                </Col>
              </Row>
              <div className=" mt-5 pt-5 create-nft-trait text-center mb-5">
                <Button className="mi-button-primary mx-3 px-4" variant="primary">
                  Create
                </Button>
                <Button className="mi-button-light bg-gray mx-3 px-4" variant="light">
                  Cancel
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { CreateCollection };
