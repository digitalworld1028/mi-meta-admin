import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';




function GlobalDocuments() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [imageFile, setImagedFile] = useState("");
  const [bannerFile, setBannerFile] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

 
  
const onUploadChange = (e:any) => {
  e.preventDefault();
  setIsEmpty(false);
  let file = e.target.files[0];
  let fileReader = new FileReader();
  fileReader.onloadend = () => {
      console.log(fileReader.result)
      if (fileReader.result !== null) {
        setImagedFile(fileReader.result.toString())
      }
  };
  fileReader.readAsDataURL(file)
};

const imageSelect = () => {
  const profileImage = document.getElementById("uploadimage");
  profileImage?.click()
  console.log(profileImage)
}

const removeImage = () => {
  setImagedFile("")
}

const handleSubmit = (event:any) => {
  event.preventDefault();
  if (imageFile === "") {
    setIsEmpty(true)
    return
  }
  console.log("here");
  console.log(imageFile);
};

return (
    <Form onSubmit={handleSubmit} >
      <Row className='menusettings'>
        <Row className="d-flex align-items-center mb-3">
            <div className='logo_image_title'>Document Uploads</div>
            <div className='logo_image_subtitle mb-4'>Turn this off if you do not wish to link any social media to your marketplace.</div>
            <div className='logo_image_title font-weifont-weight-700'>Drop files to upload</div>
            <div className='logo_image_subtitle'>Drop files to upload.</div>
        </Row>
        <div className='p-3'>
           
              <Stack direction="vertical" className='upload_pane' onClick={imageSelect}>
                {imageFile!=="" && <Card.Img src={imageFile}  style={{height:'400px'}} />}
                {imageFile=="" && <Card.Img src={`/icons/dropfile.svg`}  style={{width:'160px'}} />}
                {/* <Card.Img src={imageFile !== ""? imageFile:`/icons/dropfile.svg`} style={{height:'400px'}} /> */}
                {/* <Form.Label for="uploadimage" className='upload_button'>Choose File</Form.Label> */}
                {isEmpty  && <div className="text-danger">Please upload Image</div>}
                <Form.Control type="file" className="create-file-select  mt-4" name="uploadimage"  id="uploadimage" onChange={onUploadChange} hidden/>
              </Stack>
          
        </div>
        <div className='d-flex justify-content-start pt-5 mb-5 mt-3'>
          <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
          <Button variant="primary" type="button" className='cancel_btn' onClick={removeImage}>Cancel</Button>
        </div>
      </Row>
    </Form>
  );
}

export { GlobalDocuments};
