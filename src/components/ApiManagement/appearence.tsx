import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import axios from 'axios'





function Appearence() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [logoLight, setLogoLight] = useState("");
  const [logoDark, setLogoDark] = useState("");
  const [isDarkEmpty, setIsDarkEmpty] = useState(false);
  const [isLightEmpty, setIsLightEmpty] = useState(false);
  const [validated, setValidated] = useState(false);
  const [mainColor, setMainColor] = useState("#8D3695");
  const [secondColor, setSecondColor] = useState("#F66C7D");
  const [gradienColor1, setGradientColor1] = useState("#4CE1B6");
  const [gradienColor2, setGradientColor2] = useState("#70BBFD");

  const [fontType, setFontType] = useState(0);

  const mystyle = {
    background: `linear-gradient(180deg,${gradienColor1} 0%, ${gradienColor2} 100%)`,
    width:"70px",
    height:"25px"
  }

 
  
const onLogoLightChange = (e:any) => {
  e.preventDefault();
  let file = e.target.files[0];
  let fileReader = new FileReader();

  fileReader.onloadend = () => {
      if (fileReader.result !== null) {
        setLogoLight(fileReader.result.toString())
      }
      
  };
  fileReader.readAsDataURL(file)
  setIsLightEmpty(false);
};
const onLogoDarkChange = (e:any) => {
  e.preventDefault();
  let file = e.target.files[0];
  let fileReader = new FileReader();

  fileReader.onloadend = () => {
      if (fileReader.result !== null) {
        setLogoDark(fileReader.result.toString())
      }
      
  };
  fileReader.readAsDataURL(file)
  setIsDarkEmpty(false)
};
const removeDark = () => {
  setLogoDark("");
}
const removeLight = () => {
  setLogoLight("")
}
const handleSelectChange = (e:any)=> {
  setFontType(e.target.value);
}

const handleSubmit = (event:any) => {
  event.preventDefault();
  if (logoLight === "") {
    setIsLightEmpty(true)
  }
  if (logoDark === "") {
    setIsDarkEmpty(true)
  }
  // console.log("------------------");
  // console.log(logoLight);
  // console.log(logoDark);
  // console.log("fontType");
  // console.log(fontType);
  // console.log(mainColor,secondColor, gradienColor1,gradienColor2);
  axios.post("http://localhost:5000/api/globalsettings/appearence", mainColor).then(function(response) {
    console.log("res is ", response)
  })


};

  return (
    <Row className='p-3 appearence'>
      <Form  onSubmit={handleSubmit} >
        <Col xl={8} lg={8} md={12} sm={12} >
          <div className='LOGO'>
            <div className='sub_title mt-3 mb-5'>Logo</div>
            <div className='file_upload ms-2'>
              <Row className="d-flex align-items-center mb-3">
                <Col xl={2} lg={6} md={6} sm={6}>
                  <div className='logo_image_title'>Logo Image-Light</div>
                  <div className='logo_image_subtitle'>Choose a logo to display in light modeadfadfadsfasdf</div>
                </Col>
                <Col xl={10} lg={6} md={6} sm={6}>
                  <div  className='upload_card align-items-logoLight'>
                    {logoLight !== "" && <Card.Img src={logoLight} className="upload_img" />}
                    {logoLight == "" && <div className="upload_img" style={{border:"1px solid #C4C4C4"}} />}
                    <div className='d-flex'>
                      <Form.Group className='me-1'>
                        <Form.Label for="actual-btn" className='upload_button'>Upload</Form.Label>
                        <Form.Control type="file" className="create-file-select  mt-4" name="logolight"  id="actual-btn" onChange={onLogoLightChange} hidden/>
                      </Form.Group>
                      <Form.Group>
                        <Button className='upload_button' onClick={removeLight}>Remove</Button>
                      </Form.Group>
                    </div>
                    {isLightEmpty == true && <div className="text-danger">Please upload Logo Image-Light</div>}
                    
                  </div>
                </Col>
              </Row>
              <Row className="d-flex align-items-center">
                <Col xl={2} lg={6} md={6} sm={6}>
                  <div className='logo_image_title'>Logo Image - Dark</div>
                  <div className='logo_image_subtitle'>Choose a logo to display in dark mode</div>
                </Col>
                <Col xl={10} lg={6} md={6} sm={6}>
                  <div  className='upload_card align-items-center'>
                    {logoDark !== "" && <Card.Img src={logoDark} className="upload_img" />}
                    {logoDark == "" && <div className="upload_img" style={{border:"1px solid #C4C4C4"}} />}
                    <div className='d-flex'>
                      <Form.Group className='me-1'>
                        <Form.Label for="logodark" className='upload_button'>Upload</Form.Label>
                        <Form.Control type="file" className="create-file-select  mt-4" name="logodark"  id="logodark" onChange={onLogoDarkChange} hidden />
                      </Form.Group>
                      <Form.Group>
                        <Button className='upload_button' onClick={removeDark}>Remove</Button>
                      </Form.Group>
                    </div>
                    {isDarkEmpty == true && <div className="text-danger font_size_10">Please upload Logo Image-Light</div>}

                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className='FONT mb-5'>
            <div className='sub_title mt-3 mb-4'>Font</div>
            <div className="d-flex align-items-center ms-2">
              <div className='logo_image_title w-15'>Font Family</div>
              <Form.Group className='w-70' >
                <Form.Select aria-label="Default select example" className='placeholder_bg' name="fontfamily" defaultValue={fontType} onChange={(event)=>handleSelectChange(event)}>
                  <option style={{background:"#212529", color:"white"}} value="0" >Montserrat</option>
                  <option style={{background:"#212529", color:"white"}} value="1">Robot</option>
                  <option style={{background:"#212529", color:"white"}} value="2" >Italic</option>
                  <option style={{background:"#212529", color:"white"}} value="3">Arial</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          <div className='COLORS'>
            <div className='sub_title mt-3 mb-4'>colors</div>
            <div className='file_upload ms-2'>
              <Row className="d-flex align-items-center mb-3">
                <Col xl={2} lg={6} md={6} sm={6}>
                  <div className='logo_image_title'>Main Color</div>
                  <div className='logo_image_subtitle'>Choose the most dominant theme color</div>
                </Col>
                <Col xl={10} lg={6} md={6} sm={6}>
                  <Form.Group className='me-1 d-flex align-items-center'>
                    <Form.Control
                      type="color"
                      id="exampleColorInput"
                      defaultValue={mainColor}
                      title="Choose your color"
                      className="color_picker"
                      onChange={(e)=>setMainColor(e.target.value)}
                      name="maincolor"
                    />
                    <Form.Label htmlFor="exampleColorInput" className='logo_image_title picker_label'>Select Color</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="d-flex align-items-center mb-3">
                <Col xl={2} lg={6} md={6} sm={6}>
                  <div className='logo_image_title'>Secondary Color</div>
                  <div className='logo_image_subtitle'>Choose the second most dominant theme color</div>
                </Col>
                <Col xl={10} lg={6} md={6} sm={6}>
                    <Form.Group className='me-1 d-flex align-items-center'>
                      <Form.Control
                        type="color"
                        id="exampleColorInput"
                        defaultValue={secondColor}
                        title="Choose your color"
                        className="color_picker"
                        name="secondcolor"
                        onChange={(e)=>setSecondColor(e.target.value)}
                      />
                      <Form.Label htmlFor="exampleColorInput" className='logo_image_title picker_label'>Select Color</Form.Label>
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="d-flex align-items-center mb-3">
                <Col xl={2} lg={6} md={6} sm={6}>
                  <div className='logo_image_title'>Gradient Colors</div>
                  <div className='logo_image_subtitle'>Define colors for gradient styled elements</div>
                </Col>
                <Col xl={10} lg={6} md={6} sm={6}>
                  <div className='d-flex'>
                    <Form.Group className='me-1 align-items-center me-4'>
                      <div className="uplabel">Color Stop 1</div>
                      <div className='d-flex'>
                        <Form.Control
                          type="color"
                          id="exampleColorInput"
                          defaultValue={gradienColor1}
                          title="Choose your color"
                          className="color_picker"
                          onChange = {(e)=>setGradientColor1(e.target.value)}
                        />
                        <Form.Label htmlFor="exampleColorInput" className='logo_image_title picker_label mt-0'>Select Color</Form.Label>
                      </div>
                    </Form.Group>
                    <Form.Group className='me-1 align-items-center me-4'>
                      <div className="uplabel">Color Stop 2</div>
                      <div className='d-flex'>
                        <Form.Control
                          type="color"
                          id="exampleColorInput"
                          defaultValue={gradienColor2}
                          title="Choose your color"
                          className="color_picker"
                          onChange = {(e)=>setGradientColor2(e.target.value)}
                        />
                        <Form.Label htmlFor="exampleColorInput" className='logo_image_title picker_label mt-0'>Select Color</Form.Label>
                      </div>
                    </Form.Group>
                    <Form.Group className='me-1 align-items-center'>
                      <div className="uplabel">Result</div>
                      <div className='d-flex'>
                        <div
                            style={mystyle}
                          />
                      </div>
                    </Form.Group>
                  </div>
                    
                  </Col>
              </Row>
            </div>
          </div>
          <div className='d-flex justify-content-start pt-5 mb-5 mt-5'>
            <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
            <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
          </div>
        </Col>
      </Form>
      
  </Row>
  );
}

// export { Appearence};
