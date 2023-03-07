import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

import RLDD from 'react-list-drag-and-drop/lib/RLDD';

const fruits = require('./fruits.json');



function HeroSlider() {
  interface Item {
    id: number;
    title: string;
    icon: string;
  }

  interface CardItem {
    id: number;
    slidename: String, 
    image: String, 
    headerline: String, 
    subtxt: String, 
    buttontext1: String, 
    url: String, 
    buttoncolor: String, 
    state: String, 
    buttontext2: String, 
    url2: String,
    buttoncolor2: String, 
    duration: String,
    unlockable:boolean,
    skipslide:boolean
  }
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [isSlideEmpty, setIsSlideEmpty] = useState(false);
  const [edit, setEdit] = useState(false);

  const [unlockable, setUnlockable] = useState(true);
  const [slideImage, setSlideImage] = useState("");
  const [slidename, setSlideName] = useState("Slide name");
  const [headerline, setHeaderline] = useState("");
  const [subtxt, setSubtxt] = useState("");
  const [buttoncolor1, setButtonColor1] = useState("#8D3695");
  const [buttoncolor2, setButtonColor2] = useState("#A71A13");
  const [buttontext1, setButtonText1] = useState("");
  const [buttontext2, setButtonText2] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [duration, setDuration] = useState("");
  const [skipslide, setSkipSlide] = useState(false);

  const [editId, setEditId] = useState(undefined);
  // const [items,setItems] = useState<CardItem[]>([]);
  const [items, setItems] = useState(fruits.emptyfruits);

const onUploadChange = (e:any) => {
  e.preventDefault();
  let file = e.target.files[0];
  let fileReader = new FileReader();

  fileReader.onloadend = () => {
      if (fileReader.result !== null) {
        setSlideImage(fileReader.result.toString())
      }
      
  };
  fileReader.readAsDataURL(file)
};

const slideImageSelect = () => {
  const profileImage = document.getElementById("image");
  profileImage?.click()
}

const handleSubmit = (event:any) => {
  
  event.preventDefault();
  if (slideImage === "") {
    setIsSlideEmpty(true);
    return false;
  }

  if(editId === undefined) {
    var temp = items;
    temp.id = items.length
    temp.unlockable = unlockable;
    temp.image = slideImage;
    temp.slidename = slidename;
    temp.headerline = headerline;
    temp.subtxt = subtxt;
    temp.buttoncolor1 = buttoncolor1;
    temp.buttoncolor2 = buttoncolor2;
    temp.buttontext1 = buttontext1;
    temp.buttontext2 = buttontext2;
    temp.url1 = url1;
    temp.url2 = url2;
    temp.duration = duration;
    temp.skipslide = skipslide;
    setItems([...items, temp])
  } else {
    var temp = items.filter((e:any) =>e.id === editId)[0]
    temp.unlockable = unlockable;
    temp.image = slideImage;
    temp.slidename = slidename;
    temp.headerline = headerline;
    temp.subtxt = subtxt;
    temp.buttoncolor1 = buttoncolor1;
    temp.buttoncolor2 = buttoncolor2;
    temp.buttontext1 = buttontext1;
    temp.buttontext2 = buttontext2;
    temp.url1 = url1;
    temp.url2 = url2;
    temp.duration = duration;
    temp.skipslide = skipslide;
    items[editId] = temp;
    setItems([...items]);
  }
  setIsSlideEmpty(false);
  setUnlockable(true);
  setSlideImage("");
  setSlideName("Slide name");
  setHeaderline("");
  setSubtxt("");
  setButtonColor1("#8D3695");
  setButtonColor2("#A71A13");
  setButtonText1("");
  setButtonText2("");
  setUrl1("");
  setUrl2("");
  setDuration("");
  setSkipSlide(false);
  setEditId(undefined);
 
};

const handleEdit = (id:any) => {
  setEditId(id);
  const itemdata = items.filter((e:any) =>e.id === id)[0]
  setUnlockable(itemdata.unlockable);
  setSlideImage(itemdata.image);
  setSlideName(itemdata.slidename);
  setHeaderline(itemdata.headerline);
  setSubtxt(itemdata.subtxt);
  setButtonColor1(itemdata.buttoncolor1);
  setButtonColor2(itemdata.buttoncolor2);
  setButtonText1(itemdata.buttontext1);
  setButtonText2(itemdata.buttontext2);
  setUrl1(itemdata.url);
  setUrl2(itemdata.url2);
  setDuration(itemdata.duration);
}

const addNewSlide= ()=> {
  setUnlockable(true);
  setSlideImage("");
  setSlideName("Slide name");
  setHeaderline("");
  setSubtxt("");
  setButtonColor1("#8D3695");
  setButtonColor2("#A71A13");
  setButtonText1("");
  setButtonText2("");
  setUrl1("");
  setUrl2("");
  setDuration("");
  setSkipSlide(false);
}

const handleSkip = (id:any) => {
  const itemdata = items[id];
  itemdata.skipslide = !itemdata.skipslide;
  items[id] = itemdata;
  setItems([...items]);
  
}
const handleDelete = (id:any) => {
  // var temp = items;
  // temp.splice(id, 1);
  // setItems([...temp])
  const itemdata = items.filter((e:any) =>e.id === id)[0]
  var temp = items;
  var tempdata = temp.filter(function(f:any) { return f !== itemdata })
  setItems([...tempdata])
  
}

const handleCancel = () => {
  addNewSlide();
}



// const handleChange = (e:any)=> {

//   var temp ;
//   // var temp = inputValues;
//   if(inputValues) {
//      temp = inputValues;
//   } else {
//     temp = {} as CardItem;
//   }
 
  
//   if(e.target.name =="slidename") {
//     temp.slidename = e.target.value
//   }
//   if(e.target.name =="headerline") {
//     temp.headerline = e.target.value
//   }
//   if(e.target.name =="subtxt") {
//     temp.subtxt = e.target.value
//   }
//   if(e.target.name =="buttontext") {
//     temp.buttontext = e.target.value
//   }
//   if(e.target.name =="state") {
//     temp.state = e.target.value
//   }
//   if(e.target.name =="buttontext2") {
//     temp.buttontext2 = e.target.value
//   }
//   if(e.target.name =="buttoncolor") {
//     temp.buttoncolor = e.target.value
//   }
//   if(e.target.name =="url2") {
//     temp.url2 = e.target.value
//   }
//   if(e.target.name =="buttoncolor2") {
//     temp.buttoncolor2 = e.target.value
//   }
//   if(e.target.name =="duration") {
//     temp.duration = e.target.value
//   }
 
//   setInputValues({...temp});
// }

const itemRenderer = (item: CardItem, index: number): JSX.Element => {

  return (
      <div className='me-2'>
        <div className='slide_name mb-1'>{item.slidename}</div>
        <div className='slide_image' style={{background:`url(${item.image})` , backgroundSize:"cover", position:"relative"}} >
          <div className='d-flex justify-content-end pt-1 '>
            <Image src={"/images/slide_move.svg"} className="me-1" />
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-button-dark-example1" className='slide_detail' >
                <Image src={"/images/slide_detail_icon.svg"} />
              </Dropdown.Toggle>
              <Dropdown.Menu style={{padding:"0px"}} variant="dark">
                <Dropdown.Item  className="drop-item" onClick={()=>handleEdit(item.id)} >Edit</Dropdown.Item>
                <Dropdown.Item  className="drop-item" onClick={()=>handleSkip(item.id)} >Skip Slide {item.skipslide ? "(selected)" : ""} </Dropdown.Item>
                <Dropdown.Item  className="drop-item" onClick={()=>handleDelete(item.id)} >Delete Slide</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='w-60 ms-3 align-items-center '>
              <div className='slide_title font_size_14'>{item.headerline}</div>
              <div className='slide_content font_size_8'>{item.subtxt}</div>
              <div className='d-flex mt-1' style={{position:"absolute", bottom:"20px"}}>
                {item.buttontext1 && <Button className='me-1' style={{backgroundColor : buttoncolor1}}>{item.buttontext1}</Button>}
                {item.buttontext2 && <Button style={{backgroundColor : buttoncolor2}}>{item.buttontext2}</Button>}
              </div> 
          </div>
        </div>
      </div>
  );
};

const handleRLDDChange = (reorderedItems: Array<Item>) => {
    setItems([...reorderedItems]);
};
  return (
    <Row className='slider'>
    <div className='addPane'>
      <div className='slide_list d-flex' >
        <div className='slide_card me-3' onClick={()=>addNewSlide()}>
          <div className='slide_name mb-1' >Add new hero slide</div>
          <div className='slide_image plus_pane'>
              <Image src={"/images/+.svg"} />
          </div>
        </div>
        <div className='slide_card me-3 d-flex'>
          {items.length > 0 && 
          <RLDD
          cssClasses="example-list-container"
          layout="horizontal"
          items={items}
          itemRenderer={itemRenderer}
          onChange={handleRLDDChange}
          // onChange={items ? handleRLDDChange : undefined}
        />}
          
        </div>
      </div>
    </div>
    <Form onSubmit={handleSubmit}>
      <input type="hidden" value={editId} />
      <Row className='editPane'>
          <Col xl={4} lg={4} md={12} xs={12}>
            <Form.Group className="input_form" controlId="slidename">
              <Col lg={4}><Form.Label className='up_label'>Slide Name</Form.Label></Col>
              <Col><Form.Control type="text" placeholder="Bored Panda Feature" className='placeholder_bg' name="slidename" value={slidename} 
              onChange={(e)=>setSlideName(e.target.value)} /></Col>
            </Form.Group>
            <Row className="d-flex align-items-center mb-3">
            <Col xl={5} lg={6} md={6} sm={6}>
              <div className='logo_image_title'>Hero 1 background</div>
              <div className='logo_image_subtitle'>Choose a background for your page hero section. We recommend 1920x720px .png/.jpg</div>
            </Col>
            <Col xl={7} lg={6} md={6} sm={6}>
              <div  className='upload_card align-items-center'  >
                {slideImage !== "" && <Card.Img src={slideImage} className="upload_img" onClick={slideImageSelect} />}
                {slideImage == "" && <div className="upload_img" style={{border:"1px solid #C4C4C4"}} onClick={slideImageSelect} />}
                <div className='d-flex'>
                  <Form.Group className='me-1'>
                    <Form.Label for="image" className='upload_button'>Upload</Form.Label>
                    <Form.Control type="file" className="create-file-select  mt-4" name="image"  id="image" onChange={onUploadChange} hidden/>
                  </Form.Group>
                  <Form.Group>
                    <Button className='upload_button' onClick={()=>setSlideImage("")}>Remove</Button>
                  </Form.Group>
                </div>
                {isSlideEmpty == true && <div className="text-danger">Please upload Image</div>}
              </div>
            </Col>
          </Row>
          <div className='CTATEXT'>
              <div className='logo_image_title'>Hero 1 CTA Text</div>
              <div className='logo_image_subtitle mb-3'>Enter the headline text for your hero banner. </div>
              <Form.Group className="input_form mb-3" controlId="headerline">
                <Col lg={4}><Form.Label className='up_label'>Headline H1</Form.Label></Col>
                <Col>
                  <Form.Control type="text" placeholder="The Bored Panda Collection is here." className='placeholder_bg' name="headerline" value={headerline} 
                    onChange={(e)=>setHeaderline(e.target.value)} />
                </Col>
              </Form.Group>
              <Form.Group className="input_form" controlId="subtext">
                <Col lg={4}><Form.Label className='up_label'>Subtext</Form.Label></Col>
                <Col>
                  <textarea className='placeholder_bg' placeholder='It’s the hottest thing to hit the market since the apes left town. Don’t miss your chance at owning one of these rares!' style={{height:"80px"}}  name="subtxt" value={subtxt} 
                  onChange={(e)=>setSubtxt(e.target.value)}></textarea>
                </Col>
              </Form.Group>
          </div>
          <div className='CTABUTTON'>
              <div className='logo_image_title'>Hero 1 CTA Button 1</div>
              <div className='logo_image_subtitle mb-3'>Set the button text for your CTA button and the link where you want to send your users.</div>
              <Form.Group className="input_form mb-3" controlId="buttontext">
                <Col lg={4}><Form.Label className='up_label'>Button Text</Form.Label></Col>
                <Col><Form.Control type="text" placeholder="Let's go" defaultValue="Let's go" className='placeholder_bg' name="buttontext" value={buttontext1} 
              onChange={(e)=>setButtonText1(e.target.value)} /></Col>
              </Form.Group>
              <Form.Group className="input_form" controlId="urltext">
                <Col lg={4}><Form.Label className='up_label'>URL</Form.Label></Col>
                <Col><Form.Control type="text" placeholder="https://yoursite.com/newdrop" className='placeholder_bg' name="url" value={url1} 
              onChange={(e)=>setUrl1(e.target.value)} /></Col>
              </Form.Group>
            
              <Form.Group className='me-1 d-flex align-items-center'>
                <Form.Label className='up_label me-4 mt-1'>Button Hex#</Form.Label>
                <Form.Control
                  type="color"
                  id="exampleColorInput"
                  defaultValue="#8D3695"
                  title="Choose your color"
                  className="color_picker"
                  name="buttoncolor"
                  value={buttoncolor1} 
                  onChange={(e)=>setButtonColor1(e.target.value)}
                />
                <Form.Label htmlFor="exampleColorInput" className='logo_image_title picker_label'>Select Color</Form.Label>
              </Form.Group>
          </div>
          <div className='CTABUTTON2 mt-4'>
              <div className='logo_image_title'>Hero 1 CTA Button 2</div>
              <div className='logo_image_subtitle mb-3'>Add a second CTA button to your hero image with a link.</div>
              <div className='d-flex align-items-center mt-4 mb-3'>
                <div className='up_label'>Off</div>
                <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={unlockable} onChange={()=>setUnlockable(!unlockable)} />
                <div className='up_label ms-2'>On</div>
              </div>
              {unlockable && <div>
                <Form.Group className="input_form mb-3" controlId="button2text">
                  <Col lg={4}><Form.Label className='up_label'>Button 2 Text</Form.Label></Col>
                  <Col><Form.Control type="text" placeholder="Featured" className='placeholder_bg' name="buttontext2"  value={buttontext2} 
                onChange={(e)=>setButtonText2(e.target.value)}/></Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="url2text">
                  <Col lg={4}><Form.Label className='up_label'>URL</Form.Label></Col>
                  <Col><Form.Control type="text" placeholder="https://yoursite.com/newdrop" className='placeholder_bg' name="url2"  value={url2} 
                  onChange={(e)=>setUrl2(e.target.value)}/></Col>
                </Form.Group>
              
                <Form.Group className='me-1 d-flex align-items-center'>
                  <Form.Label className='up_label me-4 mt-1'>Button Hex#</Form.Label>
                  <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#A71A13"
                    title="Choose your color"
                    className="color_picker"
                    name="buttoncolor2"
                    value={buttoncolor2} 
                    onChange={(e)=>setButtonColor2(e.target.value)}
                  />
                  <Form.Label htmlFor="exampleColorInput" className='logo_image_title picker_label'>Select Color</Form.Label>
                </Form.Group>
              </div>}
              <Form.Group className="input_form mb-3 mt-3" controlId="slideduration">
                <Col lg={4}><Form.Label className='up_label'>Slide Duration</Form.Label></Col>
                <Col><Form.Control type="text" placeholder="Enter a time in seconds. Default is 3 seconds" className='placeholder_bg' name="duration"    value={duration} 
                  onChange={(e)=>setDuration(e.target.value)}/>
                </Col>
              </Form.Group>
              <div className='d-flex justify-content-start pt-5 mb-5 mt-5'>
                <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
                <Button variant="primary" type="button" className='cancel_btn' onClick={()=>handleCancel()}>Cancel</Button>
              </div>
          </div>
          </Col>
          <Col xl={8} lg={8} md={12} xs={12}>
            <div className='slide_card me-3 d-flex'>
              <div className='up_label mb-1 me-5'>Preview</div>
              {slideImage != "" && <div className='preview_image' style={{background:`url(${slideImage})`, backgroundSize:"cover"}} >
                <div className='w-50 ms-5 align-items-center '>
                    <div className='preview_title font_size_30 mb-3' style={{ visibility:`${headerline==="" ? 'hidden': 'visible'}`}}>{headerline}</div>
                    <div className='preview_content font_size_12 mb-3'>{subtxt}</div>
                    <div className='d-flex mt-1' style={{position:"absolute", bottom:"91px"}}>
                      <Button className='me-1' style={{backgroundColor : buttoncolor1, border:"none", visibility:`${buttontext1==="" ? 'hidden': 'visible'}` }}>{buttontext1}</Button>
                      <Button style={{backgroundColor : buttoncolor2, border:"none", visibility:`${buttontext2==="" ? 'hidden': 'visible'}`}}>{buttontext2}</Button>
                    </div> 
                </div>
              </div>}
              {slideImage == "" && <div className="preview_image" style={{border:"1px solid #C4C4C4"}} />}
            </div>
          </Col>
      </Row>
    </Form>
  </Row>
  );
}

export { HeroSlider};
