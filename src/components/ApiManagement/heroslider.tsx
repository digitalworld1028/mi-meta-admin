import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { durations } from '../../store';




function HeroSlider() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [unlockable, setUnlockable] = useState(true);
  const [slideImage, setSlideImage] = useState("");
  const [isSlideEmpty, setIsSlideEmpty] = useState(false);
  const [inputValues, setInputValues] = useState({});

  // const [cardItems, setCardItem] = useState([{slidename: "", image: "", headerline: "", subtxt: "", buttontext:"", url: "", buttoncolor: "", state:"", buttontext2: "", url2:"",buttoncolor2:"", duration:""}]);
  const [cardItems, setCardItem] = useState<object[]>([]);
  // const [cardItems, setCardItem] = useState([{}]);
  

 
  
const onUploadChange = (e:any) => {
  e.preventDefault();
  // let file = e.target.files[0];
  // let fileReader = new FileReader();

  // fileReader.onloadend = () => {
  //     if (fileReader.result !== null) {
  //       setSlideImage(fileReader.result.toString())
  //       // setInputValues({image:fileReader.result.toString()})
  //     }
      
  // };
  // fileReader.readAsDataURL(file)
};

const slideImageSelect = () => {
  const profileImage = document.getElementById("slide_image");
  profileImage?.click()
}

const handleSubmit = (event:any) => {
  event.preventDefault();
  if (slideImage === "") {
    setIsSlideEmpty(true);
    return
  }
  var tempcard =  cardItems;
  tempcard.push({...inputValues});
  setCardItem([...tempcard]);
  setIsSlideEmpty(false);
  
};

const handleChange = (e:any)=> {
  const temp: {[key:string]: string} = inputValues;
  temp[e.target.name] = e.target.value ;
  temp["image"] = slideImage;
  setInputValues({...temp});
}

console.log("cardItems");
console.log(cardItems);

  return (
    <Row className='slider'>
    <div className='addPane'>
      <div className='slide_list d-flex'>
        <div className='slide_card me-3'>
          <div className='slide_name mb-1'>Add new hero slide</div>
          <div className='slide_image plus_pane'>
              <Image src={"/images/+.svg"} />
          </div>
        </div>
        <div className='slide_card me-3 d-flex'>
          {cardItems.length > 0 && cardItems.map((item, i) =>
            <div key={i}>
              <div className='me-2'>
                <div className='slide_name mb-1'>1.Bored Panda Feature</div>
                <div className='slide_image' style={{background:"url(/images/slide/18.png)", backgroundSize:"cover"}} >
                {/* <div className='slide_image' style={{backgroundSize:"cover"}} > */}
                  <div className='d-flex justify-content-end pt-1 '>
                    <Image src={"/images/slide_move.svg"} className="me-1" />
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-button-dark-example1" className='slide_detail' >
                        <Image src={"/images/slide_detail_icon.svg"} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{padding:"0px"}} variant="dark">
                        <Dropdown.Item href="#/action-1" className="drop-item">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className="drop-item">Skip Slide</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className="drop-item">Delete Slide</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className='w-60 ms-3 align-items-center '>
                      <div className='slide_title font_size_14'>The Bored Panda Collection is here.</div>
                      <div className='slide_content font_size_8'>It’s the hottest thing to hit the market since the apes left town. Don’t miss your chance at owning one of these rares!</div>
                      <div className='d-flex mt-1'>
                        {/* <div className='slide_button'>Let's go</div> */}
                        <Button className='back_purple me-1'>Let's go</Button>
                        <Button className='back_red'>Featured</Button>
                      </div> 
                  </div>
                </div>
              </div>
            </div>
          )}
          {cardItems.forEach((card, index)=> {
         
             return(
              <div className='d-flex mt-1'>
              {/* <div className='slide_button'>Let's go</div> */}
              <Button className='back_purple me-1'>Let's go</Button>
              <Button className='back_red'>Featured</Button>
            </div> 
             )
         
          })}
        </div>
      </div>
    </div>
    <Form onSubmit={handleSubmit}>
      <Row className='editPane'>
          <Col xl={4} lg={4} md={12} xs={12}>
            <Form.Group className="input_form" controlId="slidename">
              <Col lg={4}><Form.Label className='up_label'>Slide Name</Form.Label></Col>
              <Col><Form.Control type="text" placeholder="Bored Panda Feature" className='placeholder_bg' name="slidename" onChange={handleChange} /></Col>
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
                    <Form.Label for="slide_image" className='upload_button'>Upload</Form.Label>
                    <Form.Control type="file" className="create-file-select  mt-4" name="slide_image"  id="slide_image" onChange={onUploadChange} hidden/>
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
                <Col><Form.Control type="text" placeholder="The Bored Panda Collection is here." className='placeholder_bg' name="headerline" onChange={handleChange} /></Col>
              </Form.Group>
              <Form.Group className="input_form" controlId="subtext">
                <Col lg={4}><Form.Label className='up_label'>Subtext</Form.Label></Col>
                <Col>
                  <textarea className='placeholder_bg' placeholder='It’s the hottest thing to hit the market since the apes left town. Don’t miss your chance at owning one of these rares!' style={{height:"80px"}}  name="subtxt" onChange={handleChange}></textarea>
                </Col>
              </Form.Group>
          </div>
          <div className='CTABUTTON'>
              <div className='logo_image_title'>Hero 1 CTA Button 1</div>
              <div className='logo_image_subtitle mb-3'>Set the button text for your CTA button and the link where you want to send your users.</div>
              <Form.Group className="input_form mb-3" controlId="buttontext">
                <Col lg={4}><Form.Label className='up_label'>Button Text</Form.Label></Col>
                <Col><Form.Control type="text" placeholder="Let's go" className='placeholder_bg' name="buttontext" onChange={handleChange} /></Col>
              </Form.Group>
              <Form.Group className="input_form" controlId="urltext">
                <Col lg={4}><Form.Label className='up_label'>URL</Form.Label></Col>
                <Col><Form.Control type="text" placeholder="https://yoursite.com/newdrop" className='placeholder_bg' name="url" onChange={handleChange} /></Col>
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
                  onChange={handleChange}
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
                  <Col><Form.Control type="text" placeholder="Featured" className='placeholder_bg' name="buttontext2"   onChange={handleChange}/></Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="url2text">
                  <Col lg={4}><Form.Label className='up_label'>URL</Form.Label></Col>
                  <Col><Form.Control type="text" placeholder="https://yoursite.com/newdrop" className='placeholder_bg' name="ur2"   onChange={handleChange} /></Col>
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
                    onChange={handleChange}
                  />
                  <Form.Label htmlFor="exampleColorInput" className='logo_image_title picker_label'>Select Color</Form.Label>
                </Form.Group>
              </div>}
              <Form.Group className="input_form mb-3 mt-3" controlId="slideduration">
                <Col lg={4}><Form.Label className='up_label'>Slide Duration</Form.Label></Col>
                <Col><Form.Control type="text" placeholder="Enter a time in seconds. Default is 3 seconds" className='placeholder_bg' name="duration"   onChange={handleChange} /></Col>
              </Form.Group>
              <div className='d-flex justify-content-start pt-5 mb-5 mt-5'>
                <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
                <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
              </div>
          </div>
          </Col>
          <Col xl={8} lg={8} md={12} xs={12}>
            <div className='slide_card me-3 d-flex'>
              <div className='up_label mb-1 me-5'>Preview</div>
              {slideImage != "" && <div className='preview_image' style={{background:`url(${slideImage})`, backgroundSize:"cover"}} >
              
                {/* <img src={slideImage} /> */}
                <div className='w-50 ms-5 align-items-center '>
                    <div className='preview_title font_size_30 mb-3'>The Bored Panda Collection is here.</div>
                    <div className='preview_content font_size_8 mb-3'>It’s the hottest thing to hit the market since the apes left town. Don’t miss your chance at owning one of these rares!</div>
                    <div className='d-flex mt-1'>
                      {/* <div className='slide_button'>Let's go</div> */}
                      <Button className='back_purple me-1 preview_button'>Let's go</Button>
                      <Button className='back_red preview_button '>Featured</Button>
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
