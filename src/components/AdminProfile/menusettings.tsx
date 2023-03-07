import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown,Modal } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';




function MenuSettings() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [categorymodal, setCategorymodal] = useState(false)
  const [menumodal, setMenumodal] = useState(false)
  const [unlockableNFT, setUnlockableNFT] = useState(true);
  const [unlockableExplicit, setUnlockableExplicit] = useState(true);
  const [categoryItems, setCategoryItems] = useState([{name: "Art", active:true}, {name: "Music", active:true}, {name: "Photograph",active:true}]);
  const [tempCategoryItem, setTempCategoryItem] = useState([{name: "Art", active:true}, {name: "Music",active:true}, {name: "Photograph",active:true}]);
  const [radiovalue, setRadiovalue] = useState("freshdesk");
  const [urlValues, setUrlValues] = useState({});
  const [menuItems, setMenuItems] = useState([{name: "Discover",  active:true}, {name: "Acitivity", active:true}, {name: "Learn", active:true}]);
  const [tempmenuItems, setTempMenuItems] = useState([{name: "Discover",  active:true}, {name: "Acitivity", active:true}, {name: "Learn", active:true}]);
 




  const handleCloseModal = () => {
    setCategorymodal(false);
  }
  const handleCloseMenuModal = () => {
    setMenumodal(false);
  }
  const cancelHandler = () => {
    setCategorymodal(false);
  }
  const cancelMenuHandler = () => {
    setMenumodal(false);
  }

  const editHandler = (e:any, i:number, type:string) => {
    console.log(tempCategoryItem)
    let itemData = tempCategoryItem;
    if (type === "active") {
      itemData[i].active = !itemData[i].active;
    } else {
      itemData[i].name = e.target.value;
    }
    setTempCategoryItem([...itemData]);
  }
  const editMenuHandler = (e:any, i:number, type:string) => {
    let itemData = tempmenuItems;
    if (type === "active") {
      itemData[i].active = !itemData[i].active;
    } else {
      itemData[i].name = e.target.value;
    }
    setTempMenuItems([...itemData]);
  }
  const saveHandler = () => {
    // setBufferItemData([...itemData]);
    setCategoryItems(tempCategoryItem)
    setCategorymodal(false);
  }
  const saveMenuHandler = () => {
    // setBufferItemData([...itemData]);
    setMenuItems(tempmenuItems)
    setMenumodal(false);
  }
  const addItemData = () => {
    // setItemData([...itemData, {type:'Boswell', name:'Ears'}])
    setTempCategoryItem([...tempCategoryItem, {name:'', active:false}]);
  }
  const addMenuItem = () => {
    // setItemData([...itemData, {type:'Boswell', name:'Ears'}])
    setTempMenuItems([...tempmenuItems, {name:'', active:false}]);
  }

  const removeCategory = (index:number) => {
  
    var temp = tempCategoryItem;
    temp.splice(index, 1);
    setTempCategoryItem([...temp]);
  }
  const removeMenuCategory = (index:number) => {
   
    var temp = tempmenuItems;
    temp.splice(index, 1);
    setTempMenuItems([...temp]);
  }

  const handleRadio = (e:any) => {
    setRadiovalue(e.target.value);
    
  }

  const handleUrl = (e:any)=> {
    const temp: {[key:string]: string} = urlValues;
    const { name, value } = e.target;
    temp[name] = value;
    setUrlValues(temp);
  }

  const submitHandle = (e:any) => {
    e.preventDefault();
    console.log(radiovalue);
    console.log(urlValues);
    console.log(categoryItems);
    console.log(menuItems);
    console.log(unlockableNFT);
    console.log(unlockableExplicit);
  }

 
  return (
    <Form onSubmit={submitHandle}>
      <Row className='menusettings'>
          <Col xl={4} lg={4} md={12} xs={12}>
            <Row className="d-flex align-items-center mb-3">
              <Col xl={5} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>NFT/DTC Create</div>
                <div className='logo_image_subtitle'>Choose whether or not you will allow your users to see the Create menu item and create NFT/DTCs. Overrides menu toggle settings.</div>
              </Col>
              <div className='d-flex align-items-center mt-4 mb-3'>
                <div className='up_label'>Off</div>
                <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={unlockableNFT} onChange={()=>setUnlockableNFT(!unlockableNFT)}/>
                <div className='up_label ms-2'>On</div>
              </div>
              <Col xl={5} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>Allow Explicit Content</div>
                <div className='logo_image_subtitle'>Choose wether or not you will allow your users to see items with explicit content</div>
              </Col>
              <div className='d-flex align-items-center mt-4 mb-3'>
                <div className='up_label'>Off</div>
                <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs'  checked={unlockableExplicit} onChange={()=>setUnlockableExplicit(!unlockableExplicit)}/>
                <div className='up_label ms-2'>On</div>
              </div>
              <Col xl={5} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>Categories</div>
                <div className='logo_image_subtitle'>Modify existing categories or add new categories of your own.</div>
              </Col>
            </Row>
          </Col>
          <Row xl={7} lg={6} md={6} sm={6} className="mt-3 categories">
            <Col  xl={1} lg={1} md={2} sm={3}>
              <div className='category_plus me-3' onClick={() => setCategorymodal(true)}>
                  <Image src={"/images/+.svg"} style={{height:"20px"}}/>
              </div>
            </Col>
            <Col  xl={7} lg={8} md={6} sm={9}>
              {categoryItems.map((item,i)=>
                <div key={i} className={`category_card me-3 ${!item.active ? "border-color-grey":""}`}>
                  <div className={`card_icon ${!item.active ? "color-grey":""}`} >x</div>
                  <div className={`card_content ${!item.active ? "color-grey":""}`}>{item.name}</div>
                </div>
              )}
                <Modal
                  show={categorymodal}
                  onHide={handleCloseModal}
                  backdrop="static"
                  keyboard={false}
                  centered
                >
                  <Modal.Header>
                    <div></div>
                    <Modal.Title>Add categories</Modal.Title>
                    <div className="create-nft-modal-close px-2" onClick={()=>cancelHandler()}>X</div>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="create-nft-modal-item-row mb-4" style={{borderBottom:'1px solid gray'}}>
                      <div className="create-nft-modal-item-prefix"></div>
                      <div className="create-nft-modal-item-content">
                        <span>Name</span>
                      </div>
                      <div  className="create-nft-modal-item-content">
                        <span>Activity</span>
                      </div>
                    </div>
                    {tempCategoryItem.map((item, i) => {
                      return <div key={i} className="create-nft-modal-item-row">
                          <div className="create-nft-modal-item-prefix" style={{cursor:"pointer"}} onClick={()=>removeCategory(i)} >X</div>
                          <div className="create-nft-modal-item-content">
                            <div>
                              <Form.Control type="text" className="create-nft-modal-input" value={item.name} onChange={(e)=>editHandler(e, i, "name")}/>
                            </div>
                          </div>
                          <div  className="create-nft-modal-item-content">
                            <div>
                              <label>
                                <input
                                  type="checkbox"
                                  onChange={(e)=>editHandler(e, i, "active")}
                                  name={"checkstate"+ i}
                                  checked={item.active}
                                />
                                <svg
                                  className={`checkbox ${item.active ? "checkbox--active" : ""}`}
                                  aria-hidden="true"
                                  viewBox="0 0 15 11"
                                  fill="none"
                                >
                                  <path
                                    d="M1 4.5L5 9L14 1"
                                    strokeWidth="2"
                                    stroke={item.active? "#fff" : "none"}
                                  />
                                </svg>
                              </label>
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
            
            </Col>
          </Row>
          <Col xl={4} lg={4} md={12} xs={12} className="mt-4">
            <Row className="d-flex align-items-center mb-3">
              <Col xl={8} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>Menu Item toggle</div>
                <div className='logo_image_subtitle'>Choose which menu items your users will see and which are hidden. Click to toggle on/off. If Learn is active, a URL must be set below.</div>
              </Col>
            </Row>
          </Col>
          <Row xl={7} lg={6} md={6} sm={6} className="mt-3 categories">
            <Col  xl={1} lg={1} md={2} sm={3}>
              <div className='category_plus me-3'>
                  <Image src={"/images/+.svg"} style={{height:"20px"}} onClick={()=>setMenumodal(true)}/>
              </div>
            </Col>
            <Col  xl={7} lg={8} md={6} sm={9}>
              {menuItems.map((item,i)=>
                <div className={`category_card me-3 ${!item.active ? "border-color-grey":""}`} key={i}>
                  <div className={`card_icon ${!item.active ? "color-grey":""}`} >x</div>
                  <div className={`card_content ${!item.active ? "color-grey":""}`}>{item.name}</div>
                </div>
              )}
              <Modal
                  show={menumodal}
                  onHide={handleCloseMenuModal}
                  backdrop="static"
                  keyboard={false}
                  centered
                >
                  <Modal.Header>
                    <Modal.Title>Add MenuItems</Modal.Title>
                    <div className="create-nft-modal-close px-2" onClick={()=>cancelMenuHandler()}>X</div>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="create-nft-modal-item-row mb-4" style={{borderBottom:'1px solid gray'}}>
                      <div className="create-nft-modal-item-prefix"></div>
                      <div className="create-nft-modal-item-content">
                        <span>Name</span>
                      </div>
                      <div  className="create-nft-modal-item-content">
                        <span>Activity</span>
                      </div>
                    </div>
                    {tempmenuItems.map((item, i) => {
                      return <div key={i} className="create-nft-modal-item-row">
                          <div className="create-nft-modal-item-prefix" style={{cursor:"pointer"}} onClick={()=>removeMenuCategory(i)} >X</div>
                          <div className="create-nft-modal-item-content">
                            <div>
                              <Form.Control type="text" className="create-nft-modal-input" value={item.name} onChange={(e)=>editMenuHandler(e, i, "name")}/>
                            </div>
                          </div>
                          <div  className="create-nft-modal-item-content">
                            <div>
                              <label>
                                <input
                                  type="checkbox"
                                  onChange={(e)=>editMenuHandler(e, i, "active")}
                                  name={"checkstate"+ i}
                                  checked={item.active}
                                />
                                <svg
                                  className={`checkbox ${item.active ? "checkbox--active" : ""}`}
                                  aria-hidden="true"
                                  viewBox="0 0 15 11"
                                  fill="none"
                                >
                                  <path
                                    d="M1 4.5L5 9L14 1"
                                    strokeWidth="2"
                                    stroke={item.active? "#fff" : "none"}
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>
                    })}
                    <div className="create-nft-modal-item-row mt-3">
                      <div className="create-nft-modal-item-prefix" >+</div>
                      <div className="create-nft-modal-item-content">
                        <div className="create-nft-modal-add-button" onClick={addMenuItem}>
                          Add more
                        </div>
                      </div>
                      <div className="create-nft-modal-item-content" ></div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" className="create-nft-modal-btn-save" onClick = {()=>saveMenuHandler()}>Save</Button>
                    <Button variant="secondary" className="create-nft-modal-btn-close" onClick={()=>cancelMenuHandler()}>
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
              
            </Col>
          </Row>
          <Col xl={4} lg={4} md={12} xs={12} className="mt-4">
            <Row className="d-flex align-items-center mb-3">
              <Col xl={8} lg={8} md={6} sm={6}>
                <div className='logo_image_title'>Learn Connect</div>
                <div className='logo_image_subtitle'>If the Learn menu item is active, it must be linked to a third party knowledge base or blog site. Enter your URL below and set the active link using the radio buttons.</div>
              </Col>
            </Row>
          </Col>
          <Row>
            <Col lg={6}>
              <Form.Group className="input_form" controlId="displayname">
                <Col lg={2}><Form.Label className='up_label'>Zendesk URL</Form.Label></Col>
                <Col lg={8} className="d-flex align-items-center">
                  <Form.Control type="text" placeholder="zendesk.com/pandasoverapes" className='placeholder_bg' name="zendesk" onChange={handleUrl} />
                  <Form.Check
                    type="radio"
                    label=""
                    id="radio 1"
                    name="connect"
                    className='ms-3'
                    onChange={handleRadio}
                    value="zendesk"
                    checked = {radiovalue=="zendesk" ? true : false}
                  />
                </Col>
                <Col lg={2}></Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="input_form" controlId="displayname">
                <Col lg={2}><Form.Label className='up_label'>Zoho URL</Form.Label></Col>
                <Col lg={8} className="d-flex align-items-center">
                  <Form.Control type="text" placeholder="zoho.com/pandasoverapes" className='placeholder_bg' name="zoho" onChange={handleUrl} />
                  <Form.Check
                    type="radio"
                    label=""
                    id="radio 1"
                    name="connect"
                    className='ms-3'
                    onChange={handleRadio}
                    value="zoho"
                    checked = {radiovalue=="zoho" ? true : false}
                  />
                </Col>
                <Col lg={2}></Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="input_form" controlId="displayname">
                <Col lg={2}><Form.Label className='up_label'>Freshdesk URL</Form.Label></Col>
                <Col lg={8} className="d-flex align-items-center">
                  <Form.Control type="text" placeholder="freshdesk.com/pandasoverapes" className='placeholder_bg' name="freshdesk" onChange={handleUrl} />
                  <Form.Check
                    type="radio"
                    label=""
                    id="radio 1"
                    name="connect"
                    className='ms-3'
                    onChange={handleRadio}
                    value="freshdesk"
                    checked = {radiovalue=="freshdesk" ? true : false}
                  />
                </Col>
                <Col lg={2}></Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="input_form" controlId="displayname">
                <Col lg={2}><Form.Label className='up_label'>Custom URL</Form.Label></Col>
                <Col lg={8} className="d-flex align-items-center">
                  <Form.Control type="text" placeholder="Medium.com/pandasoverapes" className='placeholder_bg' name="custom" onChange={handleUrl} />
                  <Form.Check
                    type="radio"
                    label=""
                    id="radio 1"
                    name="connect"
                    className='ms-3'
                    onChange={handleRadio}
                    value="custom"
                    checked = {radiovalue=="custom" ? true : false}
                  />
                </Col>
                <Col lg={2}></Col>
              </Form.Group>
            </Col>
          </Row>
          <div className='d-flex justify-content-start pt-5 mb-5 mt-5'>
            <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
            <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
          </div>
      </Row>
  </Form>
  );
}

export { MenuSettings};
