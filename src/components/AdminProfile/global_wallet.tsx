import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function Custom_Chekbox(props:any) {
  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          props.changeFunc(props.index, props.chain, props.type);
         
        }}
      />
      <svg
        className={`checkbox ${props.check ? "checkbox--active" : ""}`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={props.check ? "#fff" : "none"} 
        />
      </svg>
    </label>
  )
}


function GlobalWallet() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [ethWallet, setEthWallet] = useState([{walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:false}, {walletId:'', royalty:true, collectionfee: true, forgingfee: false, editable:false},]);
  const [maticWallet, setMaticWallet] = useState([{walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:false}, {walletId:'', royalty:true, collectionfee: true, forgingfee: false, editable:false},]);
  const [solWallet, setSolWallet] = useState([{walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:false}, {walletId:'', royalty:true, collectionfee: true, forgingfee: false, editable:false},]);
  const [btcWallet, setBtcWallet] = useState([{walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:false}, {walletId:'', royalty:true, collectionfee: true, forgingfee: false, editable:false},]);
  const [usdtWallet, setUsdtWallet] = useState([{walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:false}, {walletId:'', royalty:true, collectionfee: true, forgingfee: false, editable:false},]);

  const addWallet = (type:String) => {
    console.log(type)
    switch (type) {
      case "ether":
        setEthWallet([...ethWallet, {walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:true}])
        break;
      case "matic":
        setMaticWallet([...maticWallet, {walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:true}])
        break;
      case "sol":
        setSolWallet([...solWallet, {walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:true}])
        break;
      case "btc":
        setBtcWallet([...btcWallet, {walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:true}])
        break;
      case "usdt":
        setUsdtWallet([...usdtWallet, {walletId:'', royalty:false, collectionfee: false, forgingfee: false, editable:true}])
        break;
    
      default:
        break;
    }
    
  }

  const setEditable = (i:any,type:String) =>  {
    console.log( type)
    switch (type) {
      case "ether":
        var temp = ethWallet;
        temp[i].editable = !temp[i].editable
        setEthWallet([...temp])
        break;
      case "matic":
        var temp = maticWallet;
        temp[i].editable = !temp[i].editable
        setMaticWallet([...temp])
        break;
      case "sol":
        var temp = solWallet;
        temp[i].editable = !temp[i].editable
        setSolWallet([...temp])
        break;
      case "btc":
        var temp = btcWallet;
        temp[i].editable = !temp[i].editable
        setBtcWallet([...temp])
        break;
      case "usdt":
        var temp = usdtWallet;
        temp[i].editable = !temp[i].editable
        setUsdtWallet([...temp])
        break;
    
      default:
        break;
    }
  }
  const handleKeyPress = (i:any,type:String,event:any) =>  {
    if(event.key === 'Enter'){
      switch (type) {
        case "ether":
          console.log("here")
          var temp = ethWallet;
          temp[i].editable = !temp[i].editable
          setEthWallet([...temp])
          break;
        case "matic":
          var temp = maticWallet;
          temp[i].editable = !temp[i].editable
          setMaticWallet([...temp])
          break;
        case "sol":
          var temp = solWallet;
          temp[i].editable = !temp[i].editable
          setSolWallet([...temp])
          break;
        case "btc":
          var temp = btcWallet;
          temp[i].editable = !temp[i].editable
          setBtcWallet([...temp])
          break;
        case "usdt":
          var temp = usdtWallet;
          temp[i].editable = !temp[i].editable
          setUsdtWallet([...temp])
          break;
      
        default:
          break;
      }
    }
  }
  const removeWallet = (i:any, type:String) => {
    console.log( type)
    switch (type) {
      case "ether":
        var temp = ethWallet;
        temp.splice(i, 1);
        setEthWallet([...temp])
        break;
      case "matic":
        var temp = maticWallet;
        temp.splice(i, 1);
        setMaticWallet([...temp])
        break;
      case "sol":
        var temp = solWallet;
        temp.splice(i, 1);
        setSolWallet([...temp])
        break;
      case "btc":
        var temp = btcWallet;
        temp.splice(i, 1);
        setBtcWallet([...temp])
        break;
      case "usdt":
        var temp = usdtWallet;
        temp.splice(i, 1);
        setUsdtWallet([...temp])
        break;
    
      default:
        break;
    }
    
  }

  const handleCheckBox = (i:any,chain:String, type: String) => {
    console.log( chain)

    if(chain=="ether") {
      console.log(type);
      switch (type) {
        case "royalty":
          var temp = ethWallet;
          temp[i].royalty = !temp[i].royalty
          setEthWallet([...temp])
          break;
        case "collectionfee":
          var temp = ethWallet;
          temp[i].collectionfee = !temp[i].collectionfee
          setEthWallet([...temp])
          break;
        case "forgingfee":
          var temp = ethWallet;
          temp[i].forgingfee = !temp[i].forgingfee
          setEthWallet([...temp])
          break;
      
        default:
          break;
      }
    }
    if(chain=="matic") {
      console.log(type);
      switch (type) {
        case "royalty":
          var temp = maticWallet;
          temp[i].royalty = !temp[i].royalty
          setMaticWallet([...temp])
          break;
        case "collectionfee":
          var temp = maticWallet;
          temp[i].collectionfee = !temp[i].collectionfee
          setMaticWallet([...temp])
          break;
        case "forgingfee":
          var temp = maticWallet;
          temp[i].forgingfee = !temp[i].forgingfee
          setMaticWallet([...temp])
          break;
      
        default:
          break;
      }
    }
    if(chain=="sol") {
      console.log(type);
      switch (type) {
        case "royalty":
          var temp = solWallet;
          temp[i].royalty = !temp[i].royalty
          setSolWallet([...temp])
          break;
        case "collectionfee":
          var temp = solWallet;
          temp[i].collectionfee = !temp[i].collectionfee
          setSolWallet([...temp])
          break;
        case "forgingfee":
          var temp = solWallet;
          temp[i].forgingfee = !temp[i].forgingfee
          setSolWallet([...temp])
          break;
      
        default:
          break;
      }
    }
    if(chain=="btc") {
      console.log(type);
      switch (type) {
        case "royalty":
          var temp = btcWallet;
          temp[i].royalty = !temp[i].royalty
          setBtcWallet([...temp])
          break;
        case "collectionfee":
          var temp = btcWallet;
          temp[i].collectionfee = !temp[i].collectionfee
          setBtcWallet([...temp])
          break;
        case "forgingfee":
          var temp = btcWallet;
          temp[i].forgingfee = !temp[i].forgingfee
          setBtcWallet([...temp])
          break;
      
        default:
          break;
      }
    }
    if(chain=="usdt") {
      console.log(type);
      switch (type) {
        case "royalty":
          var temp = usdtWallet;
          temp[i].royalty = !temp[i].royalty
          setUsdtWallet([...temp])
          break;
        case "collectionfee":
          var temp = usdtWallet;
          temp[i].collectionfee = !temp[i].collectionfee
          setUsdtWallet([...temp])
          break;
        case "forgingfee":
          var temp = usdtWallet;
          temp[i].forgingfee = !temp[i].forgingfee
          setUsdtWallet([...temp])
          break;
      
        default:
          break;
      }
    }
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(ethWallet, maticWallet, solWallet, btcWallet, usdtWallet)
  }
  

  return (
    <Form onSubmit={handleSubmit}>
    <Row className='menusettings' style={{paddingLeft:"20px"}}>
      <Row style={{borderBottom:"2px solid #979797", paddingBottom:"20px", paddingTop:"20px"}}>
        <Row className="d-flex align-items-center mb-3">
          <Col xl={2} lg={2} md={4} sm={4}>
            <div className='logo_image_title'>Connect Your Wallet</div>
            <div className='logo_image_subtitle'>These are the wallets where funds from your marketplace will be collected. Wallet options shown will reflect your choice of blockchain in the marketplace settings.</div>
          </Col>
          <Col xl={{ span: 6, offset: 2}}>
            <Row>
              <Col xl={3} lg={3} md={6} sm={6}>
                <div className='logo_image_title'>Royalties</div>
                <div className='logo_image_subtitle'>If selected, all Royalty paments will be deposited to this address</div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={6}>
                <div className='logo_image_title'>Collection Fees</div>
                <div className='logo_image_subtitle'>If selected, all Royalty paments will be deposited to this address</div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={6}>
                <div className='logo_image_title'>Minting / Forging Fees</div>
                <div className='logo_image_subtitle'>If selected, all Royalty paments will be deposited to this address</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xl={8} lg={8} md={12} sm={12}>
            <Row>
              <div className='logo_image_title mb-4'>ETH Wallets <img src={'/icons/dashboard/ethereum-logo.png'} className="me-2 ms-2 title-icon"/></div>
              {ethWallet.map((item,index)=> 
                <Row key={index}>
                  <Col>
                    <Form.Group className="input_form" controlId="discord">
                      <div className='up_label' style={{width:"70px"}}>Wallet ID</div>
                      <img src={'/icons/dashboard/ethereum-logo.png'} className="me-2 ms-2 content-icon"/>
                      <Form.Control onKeyPress={(e)=>handleKeyPress(index,"ether",e)} type="text" placeholder="Enter your url" className='placeholder_bg' defaultValue={item.walletId} readOnly={!item.editable} style={{cursor:`${!item.editable?"pointer" :""}`}} />
                      <Dropdown>
                        <Dropdown.Toggle >
                          <img src={'/icons/dot.svg'} className=" ms-3"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{padding:"0px"}} variant="light">
                          <Dropdown.Item  className="drop-item" onClick={()=>setEditable(index,"ether")}>Edit</Dropdown.Item>
                          <Dropdown.Item  className="drop-item" onClick={()=>removeWallet(index,"ether")}>Remove</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Row>
                      <Col className='text-center'> <Custom_Chekbox check = {item.royalty} changeFunc = {handleCheckBox} index = {index} chain="ether" type="royalty" /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.collectionfee} changeFunc = {handleCheckBox} index = {index} chain="ether" type="collectionfee"  /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.forgingfee} changeFunc = {handleCheckBox} index = {index} chain="ether" type="forgingfee"  /></Col>
                    </Row>
                  </Col>
                </Row>
              )}
            </Row>
            <Row>
              <Col xl={6} lg={6} md={12} sm={12} className="d-flex justify-content-center">
                <div className='wallet_plus me-3' onClick={()=>addWallet("ether")}>
                    <Image src={"/images/+.svg"} style={{height:"20px"}}/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      <Row style={{borderBottom:"2px solid #979797", paddingBottom:"20px", paddingTop:"20px"}}>
        <Row>
          <Col xl={8} lg={8} md={12} sm={12}>
            <Row>
              <div className='logo_image_title mb-4'> MATIC Wallets <img src={'/icons/dashboard/polygon-logo.png'} className="me-2 ms-2 title-icon"/></div>
                {maticWallet.map((item,index)=> 
                <Row key={index}>
                  <Col>
                    <Form.Group className="input_form" controlId="matic">
                      <div className='up_label' style={{width:"70px"}}>Wallet ID</div>
                      <img src={'/icons/dashboard/polygon-logo.png'} className="me-2 ms-2 content-icon"/>
                      <Form.Control onKeyPress={(e)=>handleKeyPress(index,"matic",e)}  type="text" placeholder="Enter your url" className='placeholder_bg' defaultValue={item.walletId} readOnly={!item.editable} style={{cursor:`${!item.editable?"pointer" :""}`}}  />
                      <Dropdown>
                        <Dropdown.Toggle >
                          <img src={'/icons/dot.svg'} className=" ms-3"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{padding:"0px"}} variant="light">
                        <Dropdown.Item  className="drop-item" onClick={()=>setEditable(index,"matic")}>Edit</Dropdown.Item>
                          <Dropdown.Item  className="drop-item" onClick={()=>removeWallet(index,"matic")}>Remove</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Row>
                      <Col className='text-center'> <Custom_Chekbox check = {item.royalty} changeFunc = {handleCheckBox} index = {index} chain="matic" type="royalty" /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.collectionfee} changeFunc = {handleCheckBox} index = {index} chain="matic" type="collectionfee"  /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.forgingfee} changeFunc = {handleCheckBox} index = {index} chain="matic" type="forgingfee"  /></Col>
                    </Row>
                  </Col>
                </Row>
              )}
            </Row>
            <Row>
              <Col xl={6} lg={6} md={12} sm={12} className="d-flex justify-content-center">
                <div className='wallet_plus me-3' onClick={()=>addWallet("matic")}>
                    <Image src={"/images/+.svg"} style={{height:"20px"}}/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      <Row style={{borderBottom:"2px solid #979797", paddingBottom:"20px", paddingTop:"20px"}}>
        <Row>
          <Col xl={8} lg={8} md={12} sm={12}>
            <Row>
              <div className='logo_image_title mb-4'> SOL Wallets <img src={'/icons/dashboard/solana-logo.png'} className="me-2 ms-2 title-icon"/></div>
              {solWallet.map((item,index)=> 
                <Row key={index}>
                  <Col>
                    <Form.Group className="input_form" controlId="sol">
                      <div className='up_label' style={{width:"70px"}}>Wallet ID</div>
                      <img src={'/icons/dashboard/solana-logo.png'} className="me-2 ms-2 content-icon"/>
                      <Form.Control onKeyPress={(e)=>handleKeyPress(index,"sol",e)}  type="text" placeholder="Enter your url" className='placeholder_bg' defaultValue={item.walletId} readOnly={!item.editable} style={{cursor:`${!item.editable?"pointer" :""}`}} />
                      <Dropdown>
                        <Dropdown.Toggle >
                          <img src={'/icons/dot.svg'} className=" ms-3"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{padding:"0px"}} variant="light">
                        <Dropdown.Item  className="drop-item" onClick={()=>setEditable(index,"sol")} >Edit</Dropdown.Item>
                          <Dropdown.Item  className="drop-item" onClick={()=>removeWallet(index,"sol")}>Remove</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Row>
                      <Col className='text-center'> <Custom_Chekbox check = {item.royalty} changeFunc = {handleCheckBox} index = {index} chain="sol" type="royalty" /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.collectionfee} changeFunc = {handleCheckBox} index = {index} chain="sol" type="collectionfee"  /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.forgingfee} changeFunc = {handleCheckBox} index = {index} chain="sol" type="forgingfee"  /></Col>
                    </Row>
                  </Col>
                </Row>
              )}
              
            </Row>
        
            <Row>
              <Col xl={6} lg={6} md={12} sm={12} className="d-flex justify-content-center">
                <div className='wallet_plus me-3'>
                    <Image src={"/images/+.svg"} style={{height:"20px"}} onClick={()=>addWallet("sol")}/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      <Row style={{borderBottom:"2px solid #979797", paddingBottom:"20px", paddingTop:"20px"}}>
        <Row>
          <Col xl={8} lg={8} md={12} sm={12}>
            <Row>
              <div className='logo_image_title mb-4'> BTC Wallets <img src={'/icons/dashboard/btc.png'} className="me-2 ms-2 title-icon" style={{width:"22px"}}/></div>
              {btcWallet.map((item,index)=> 
                <Row key={index}>
                  <Col>
                    <Form.Group className="input_form" controlId="btc">
                      <div className='up_label' style={{width:"70px"}}>Wallet ID</div>
                      <img src={'/icons/dashboard/btc.png'} className="me-2 ms-2 content-icon" style={{width:"15px"}}/>
                      <Form.Control onKeyPress={(e)=>handleKeyPress(index,"btc",e)}   type="text" placeholder="Enter your url" className='placeholder_bg' defaultValue={item.walletId} />
                      <Dropdown>
                        <Dropdown.Toggle >
                          <img src={'/icons/dot.svg'} className=" ms-3"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{padding:"0px"}} variant="light">
                        <Dropdown.Item  className="drop-item" onClick={()=>setEditable(index,"btc")}>Edit</Dropdown.Item>
                          <Dropdown.Item  className="drop-item" onClick={()=>removeWallet(index,"btc")}>Remove</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                  </Col>
                  <Col>
                  <Row>
                      <Col className='text-center'> <Custom_Chekbox check = {item.royalty} changeFunc = {handleCheckBox} index = {index} chain="btc" type="royalty" /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.collectionfee} changeFunc = {handleCheckBox} index = {index} chain="btc" type="collectionfee"  /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.forgingfee} changeFunc = {handleCheckBox} index = {index} chain="btc" type="forgingfee"  /></Col>
                    </Row>
                  </Col>
                </Row>
              )}
            </Row>
            <Row>
              <Col xl={6} lg={6} md={12} sm={12} className="d-flex justify-content-center">
                <div className='wallet_plus me-3' onClick={()=>addWallet("btc")}>
                    <Image src={"/images/+.svg"} style={{height:"20px"}} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      <Row style={{borderBottom:"2px solid #979797", paddingBottom:"20px", paddingTop:"20px"}}>
        <Row>
          <Col xl={8} lg={8} md={12} sm={12}>
            <Row>
              <div className='logo_image_title mb-4'> USDT Wallets <img src={'/icons/dashboard/usdt.png'} className="me-2 ms-2 title-icon"/></div>
              {usdtWallet.map((item,index)=> 
                <Row key={index}>
                  <Col>
                    <Form.Group className="input_form" controlId="sol">
                      <div className='up_label' style={{width:"70px"}}>Wallet ID</div>
                      <img src={'/icons/dashboard/usdt.png'} className="me-2 ms-2 content-icon"/>
                      <Form.Control onKeyPress={(e)=>handleKeyPress(index,"usdt",e)}  type="text" placeholder="Enter your url" className='placeholder_bg' defaultValue={item.walletId} readOnly={!item.editable} style={{cursor:`${!item.editable?"pointer" :""}`}} />
                      <Dropdown>
                        <Dropdown.Toggle >
                          <img src={'/icons/dot.svg'} className=" ms-3"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{padding:"0px"}} variant="light">
                        <Dropdown.Item  className="drop-item" onClick={()=>setEditable(index,"usdt")}>Edit</Dropdown.Item>
                          <Dropdown.Item  className="drop-item" onClick={()=>removeWallet(index,"usdt")}>Remove</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Row>
                      <Col className='text-center'> <Custom_Chekbox check = {item.royalty} changeFunc = {handleCheckBox} index = {index} chain="usdt" type="royalty" /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.collectionfee} changeFunc = {handleCheckBox} index = {index} chain="usdt" type="collectionfee"  /></Col>
                      <Col className='text-center'><Custom_Chekbox check = {item.forgingfee} changeFunc = {handleCheckBox} index = {index} chain="usdt" type="forgingfee"  /></Col>
                    </Row>
                  </Col>
                </Row>
              )}
              
            </Row>
        
            <Row>
              <Col xl={6} lg={6} md={12} sm={12} className="d-flex justify-content-center">
                <div className='wallet_plus me-3'>
                    <Image src={"/images/+.svg"} style={{height:"20px"}} onClick={()=>addWallet("usdt")}/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      
      <div className='d-flex justify-content-start pt-5 mb-5 mt-3'>
        <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
        <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
      </div>
    </Row>
  </Form>
  );
}

export { GlobalWallet};
