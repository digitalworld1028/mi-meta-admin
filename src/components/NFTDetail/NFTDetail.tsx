import './nftdetail.style.scss'
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Link } from 'react-router-dom';
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
  Modal
} from 'react-bootstrap';
import { DropdownComp } from '../';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import MiLogo from '../../assets/icons/MiLogo.svg';
import './nftdetail.style.scss'

const NFTDetail = () => {
  const [listMarket, setListMarket] = useState(true);
  const [selectedFile, setSelectedFile] = useState("");
  const [fixedPrice, setFixedPrice] = useState("fix");
  const [explicit, setExplicit] = useState(true);
  const [unlockable, setUnlockable] = useState(true);
  const [modal, setModal] = useState(false)
  const [itemData, setItemData] = useState([{type:'Boswell', name:'Ears'}, {type:'Rollo', name:'Sword'}, {type:'Rollo', name:'Shield'}])
  const [bufferItemData, setBufferItemData] = useState([{type:'Boswell', name:'Ears'}, {type:'Rollo', name:'Sword'}, {type:'Rollo', name:'Shield'}])

  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  dashboardcard_1= theme === 'dark' ? "#232329" : "#FFFFFF",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999",
  tooltipShadow = 'rgba(0, 0, 0, 0.25)',
  usColorShade = '#B8E986',
  caColorShade = '#FA697D',
  meColorShade = '#70BBFD',
  poColorShade = '#F6DA6E',
  labelColor2 = theme === 'dark' ? '#4CE1B6' : '#48B5FF'

  const handleChange = () => {
    console.log('handle');
  };

  const handleCloseModal = () => {
    setModal(false);
  }

  const editHandler = (e:any, i:number, type:string) => {
    let itemData = bufferItemData;
    if (type === "type") {
      itemData[i].type = e.target.value;
    } else {
      itemData[i].name = e.target.value;
    }
    setBufferItemData([...itemData]);
  }

  const addItemData = () => {
    setItemData([...itemData, {type:'Boswell', name:'Ears'}])
    setBufferItemData([...itemData, {type:'Boswell', name:'Ears'}]);
  }

  const saveHandler = () => {
    setBufferItemData([...itemData]);
    setModal(false);
  }

  const cancelHandler = () => {
    setItemData([...bufferItemData]);
    setModal(false);
  }

  const onFileChange = (e:any) => {
    e.preventDefault();
    let file = e.target.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
        console.log(fileReader.result)
        if (fileReader.result !== null) {
          setSelectedFile(fileReader.result.toString())
        }
        
    };
    console.log(fileReader.result)
    fileReader.readAsDataURL(file)
  };
  return (
    <Row className="create-nft justify-content-center">
         <Col sm={12} xs={6}>
          <div className='d-flex'>
            <div><img src={MiLogo} className="dashboard_image"/></div>
            <div className='dashboard_label' style={{color: labelColor}}>Dashboard</div>
          </div>
         <div className='dashboard_sublabel' style={{color: subLabelColor}}>Let's do awesome things today</div>
        </Col>
        <Col className="dashboard_card ms-4 mt-3 p-lg-4" sm={12}>
          <div className='dashboard_label' style={{color: labelColor}}>DTC Forging</div>
          <Col lg={9} className="ms-5 mt-5">
            <div className='sub_title mb-2'>Choose Blockchain</div>
              <Row className="match-height">
                  <Col lg={3} md={6} sm={12} >
                      <Card className='card_radius'>
                        <Card.Body className="m-auto text-center mb-5">
                          <div className='card_title font-weight-400'>Ethereum</div>
                          <Image src={`/icons/ethereum-67-107.png`} className="mt-4" />
                        </Card.Body>
                      </Card>
                  </Col>
                  <Col lg={3} md={6} sm={12}  >
                      <Card className='card_radius'>
                        <Card.Body className="m-auto text-center mb-5">
                          <div className='card_title font-weight-400'>Polygon</div>
                          <Image src={`/icons/polygon-88-88.png`} className="mt-4" />
                        </Card.Body>
                      </Card>
                  </Col>
                  <Col lg={3} md={6} sm={12}  >
                      <Card className='card_radius'>
                        <Card.Body className="m-auto text-center mb-5">
                          <div className='card_title font-weight-400'>Solana</div>
                          <Image src={`/icons/solana-79-79.png`} className="mt-4" />
                        </Card.Body>
                      </Card>
                </Col>
              </Row>
          </Col>
          <Col lg={9} className="ms-5 mt-2">
            <div className='sub_title mb-2'>Choose DTC type</div>
            <Row className="create-network match-height">
              <Col lg={3} md={6} sm={12}>
                  <Card className='card_radius'>
                    <Card.Body className="m-auto text-center mb-5">
                      <div className='card_title font-weight-700'>Single</div>
                      <Image src={`/icons/erc721-logo.png`} className="mt-4" />
                    </Card.Body>
                  </Card>
              </Col>
              <Col lg={3} md={6} sm={12}>
                  <Card className='card_radius'>
                    <Card.Body className="m-auto text-center mb-5">
                      <div className='card_title font-weight-700'>Editions</div>
                      <Image src={`/icons/erc1155-logo.png`} className="mt-4" />
                    </Card.Body>
                  </Card>
              </Col>
              <Col lg={3} md={6} sm={12}>
                  <Card className='card_radius'>
                    <Card.Body className="m-auto text-center mb-5">
                      <div className='card_title font-weight-700'>Fractional</div>
                      <Image src={`/icons/collection.png`} className="mt-4" />
                    </Card.Body>
                  </Card>
             </Col>
            </Row>
          </Col>
          <Col lg={9} className="ms-5">
            <Row>
              <Col lg={6}>
                <div className="create-nft-trait">
                  <div className='sub_title mb-2'>Choose wallet</div>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <Image src={`/icons/eth.png`} />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={`0x12f491fany9ll5rw2...cddc107116083ec49e5217`}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </div>
                <div className="creat-nft-trait">
                <div className='sub_title mb-2'>Upload File</div>
                  <Stack direction="horizontal">
                    <Card>
                      <Card.Img src={selectedFile !== ""?selectedFile:`/images/base.png`} style={{width:'100%'}} />
                    </Card>
                    <div className="text-center">
                      <p>PNG, GIF, WEBP, MP4, MP3 Max upload size 100mb.</p>
                      <Form.Control type="file" className="create-file-select" onChange={onFileChange}/>
                      {/* <input type="file" id="upload-file" placeholder="Upload a Picture"  /> */}
                      {/* <label htmlFor="upload-file">Upload a Picture</label> */}
                      {/* <Button className="mi-button">Choose file</Button> */}
                    </div>
                  </Stack>
                </div>
                <div className="creat-nft-trait">
                  <p>This is the collection where your item will appear</p>
                  <DropdownComp
                    items={[
                      <p key={0}>Choose Collection</p>,
                      <p key={1}>mi-metaverse single (default)</p>,
                      <Stack direction="horizontal" key={2}>
                        <Image src="" />
                        <p>Create new collection</p>
                      </Stack>,
                      <Stack direction="horizontal" key={3}>
                        <Image src="" />
                        <p>Create new collection</p>
                      </Stack>,
                      <Stack direction="horizontal" key={4}>
                        <Image src="" />
                        <p>Create new collection</p>
                      </Stack>,
                    ]}
                  />
                </div>
                <div className="creat-nft-trait"></div>
              </Col>
              <Col lg={6} className="p-3 create-nft-trait">
              <div className='sub_title mb-2'>Preview</div>
                <Image src={`/images/base.png`} fluid style={{ borderRadius: '20px' }} />
                <Stack direction="horizontal" className="mt-4">
                <div className='sub_title mb-2'>Description</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " checked={listMarket} onChange={(checked: boolean)=> checked?setListMarket(true):setListMarket(false)} />
                </Stack>
                {listMarket && <div className="create-nft-trait">
                  <Stack direction="horizontal" className="create-nft-price-type" gap={3}>
                    <div className="text-center" onClick={()=>setFixedPrice("fix")}>
                      <p>Fixed price</p>
                      <Image src={`/icons/tag.png`} width={76} height={76} />
                      <Form.Check className="custom-radio" type="radio" checked={fixedPrice === "fix"} />
                    </div>
                    <div className="text-center" onClick={()=>setFixedPrice("accept")}>
                      <p>Accept bids</p>
                      <Image src={`/icons/lBKGwu_2_.png`} width={76} height={76} className="p-2" />
                      <Form.Check className="custom-radio" type="radio"  checked={fixedPrice === "accept"} />
                    </div>
                    <div className="text-center" onClick={()=>setFixedPrice("time")}>
                      <p>Timed auction</p>
                      <Image src={`/icons/Watch.png`} width={76} height={76} />
                      <Form.Check className="custom-radio" type="radio" checked={fixedPrice === "time"}  />
                    </div>
                    <div className="text-center" onClick={()=>setFixedPrice("free")}>
                      <p>Free</p>
                      <Image src={`/icons/Tag_free.png`} width={76} height={76} />
                      <Form.Check className="custom-radio" type="radio" checked={fixedPrice === "free"}  />
                    </div>
                    <div></div>
                  </Stack>
                </div>}
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Stack direction="horizontal" gap={4}>
                  <div className="create-nft-erc-1155-logo" />
                  <Stack>
                    <div className="metaverse_letter">mi-metaverse</div>
                    <p>ERC-1155</p>
                  </Stack>
                </Stack>
              </Col>
              {listMarket && <Col lg={6}>
                <div className="create-nft-trait">
                <div className='sub_title mb-2'>Price</div>
                  <p>Enter the price for one item</p>
                  <Stack direction="horizontal" gap={3}>
                    <FormControl />
                    <DropdownComp items={['a', 'b']} />
                  </Stack>
                  <p className="mt-3">
                    Service fee <span className="text-light">2.5%</span>
                  </p>
                  <p>
                    You will receive <span className="text-light">4.875 MATIC</span> ($8)
                  </p>
                </div>
              </Col>}
              <Col lg={12}>
                <div className="create-nft-trait">
                <div className='sub_title mb-2'>Description</div>
                  <p>
                    The description will be included on the item’s detail page under the image.
                    supported.
                  </p>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter a detailed description of your item"
                    rows={5}
                  ></Form.Control>
                  <div className='font-size-20'>
                    <a href="https://www.markdownguide.org/getting-started" target="_blank" style={{textDecoration:'none'}} className="text-info">Markdown</a> syntax is supported.
                  </div>
                </div>
                <div className="create-nft-trait">
                <div className='sub_title mb-2'>Properties</div>
                  <p>Add properties to your item</p>
                  <Row className="create-nft-add-item gap-4">
                    <Col lg={2}>
                      <div className="bg-dark create-nft-edit-item text-center" onClick={() => setModal(true)}>+</div>
                    </Col>
                    {itemData.map((item, i) => <Col lg={2} key={i}>
                      <p>{item.type}</p>
                      <p>
                        <span className="text-info">{item.name}</span>
                      </p>
                    </Col>)}
                  </Row>
                  <Modal
                    show={modal}
                    onHide={handleCloseModal}
                    backdrop="static"
                    keyboard={false}
                    centered
                  >
                    <Modal.Header>
                      <div></div>
                      <Modal.Title>Add properties</Modal.Title>
                      <div className="create-nft-modal-close px-2" onClick={()=>cancelHandler()}>X</div>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="create-nft-modal-item-row mb-4" style={{borderBottom:'1px solid gray'}}>
                        <div className="create-nft-modal-item-prefix" ></div>
                        <div className="create-nft-modal-item-content">
                          <span>Type</span>
                        </div>
                        <div  className="create-nft-modal-item-content">
                          <span>Name</span>
                        </div>
                      </div>
                      {bufferItemData.map((item, i) => {
                        return <div key={i} className="create-nft-modal-item-row">
                            <div className="create-nft-modal-item-prefix" >X</div>
                            <div className="create-nft-modal-item-content">
                              <div>
                                <Form.Control type="text" className="create-nft-modal-input" value={item.type} onChange={(e)=>editHandler(e, i, "type")}/>
                              </div>
                            </div>
                            <div  className="create-nft-modal-item-content">
                              <div>
                                <Form.Control type="text" className="create-nft-modal-input" value={item.name}  onChange={(e)=>editHandler(e, i, "name")}/>
                              </div>
                            </div>
                          </div>
                      })}
                      <div className="create-nft-modal-item-row mt-3">
                        <div className="create-nft-modal-item-prefix" >+</div>
                        <div className="create-nft-modal-item-content">
                          <div className="create-nft-modal-add-button" onClick={addItemData}>
                            Add more
                          </div>
                        </div>
                        <div className="create-nft-modal-item-content" ></div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" className="create-nft-modal-btn-save" onClick = {()=>saveHandler()}>Save</Button>
                      <Button variant="secondary" className="create-nft-modal-btn-close" onClick={()=>cancelHandler()}>
                        Cancel
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="create-nft-trait">
                  <Row>
                    <Col lg={6} className="mt-3">
                    <div className='sub_title mb-2'>Category</div>
                      <p>This is the category where your item will appear</p>
                      <DropdownComp items={['Choose category', 'b']} />
                    </Col>
                    <Col lg={6} className="mt-3">
                    <div className='sub_title mb-2'>Royalties</div>
                      <p>Suggested royalties: 0%, 10%, 20%, 30%. Max 50%</p>
                      <FormControl />
                    </Col>
                    <Col lg={6} className="mt-3">
                    <div className='sub_title mb-2'>Rarity</div>
                      <p>The rarity of your item</p>
                      <DropdownComp items={['Choose rarity', 'b']} />
                    </Col>
                    <Col lg={6} className="mt-3">
                    <div className='sub_title mb-2'>Number of Editions</div>
                      <p>Amount of tokens</p>
                      <FormControl placeholder="0" />
                    </Col>
                  </Row>
                </div>
                <div className="create-nft-trait">
                  <Stack direction="horizontal" gap={3}>
                  <div className='sub_title mb-2'>Explicit content</div>
                    <BootstrapSwitchButton onlabel=" " offlabel=" " checked={unlockable} onChange={()=>setUnlockable(!unlockable)}/>
                  </Stack>
                  {unlockable && <FormControl
                    as="textarea"
                    rows={5}
                    placeholder="Example: “when you buy this NFT, you can get free coffee for life”"
                  /> }
                  {unlockable && <div className="mt-3 font-size-20">
                    <a href="https://www.markdownguide.org/getting-started" target="_blank" style={{textDecoration:'none'}} className="text-info">Markdown</a> syntax is supported.
                  </div>}
                  
                </div>
                <div className="create-nft-trait">
                  <Stack direction="horizontal" gap={3}>
                  <div className='sub_title mb-2'>Description</div>
                    <BootstrapSwitchButton onlabel=" " offlabel=" " checked={explicit} onChange={()=>setExplicit(!explicit)}/>
                  </Stack>
                  
                </div>
                <div className="create-nft-trait text-center mb-5">
                  <Button className="mi-button-primary mx-3" variant="primary">
                    Forge it!
                  </Button>
                  <Button className="mi-button-light bg-gray mx-3" variant="light">
                    Cancel
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Col>
    
    </Row>
  );
};

export { NFTDetail };
