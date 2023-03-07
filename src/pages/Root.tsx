import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../providers";
import {
  Explore,
  // Home,
  Collection,
  Activity,
  Auctions,
  Create,
  Detail,
  Learn,
  Drops,
  Settings,
  Discover,
  Assets,
  SignIn,
  ForgetPassword
} from "../pages";

import {
  Home,
  User,
  Header,
  Footer,
  Contact,
  ProfileSetting,
  CommunicationSetting,
  SecuritySetting,
  ChooseBlockchain,
  ChooseType,
  CreateComp,
  CreateCollection,
  NotFound,
  Wrapper,
  NFTDetail,
  UserDetail,
  AdminProfile,
  APIManagement,
  // APILogDetail
} from "../components";

function ParseRoute(props: any) {
  
  
  if (props.layout) {
    return (
      <Wrapper>
        <Header />
        {props.children}
      </Wrapper>
    );
  } else {
    return props.children;
  }
}



const isAuth = localStorage.getItem('id');





function Root() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container className={`App ${theme}`} fluid>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ParseRoute layout={false}>
                <SignIn />
              </ParseRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ParseRoute layout={false}>
                <SignIn />
              </ParseRoute>
            }
          />
          {}
          <Route
            path="/forgetpassword"
            element={
              <ParseRoute layout={false}>
                <ForgetPassword />
              </ParseRoute>
            }
          />
          <Route
            path="/dashboard"
            element={ 
              <ParseRoute layout={true}>
                 <Home />
              </ParseRoute> 
            }
          />
          <Route
            path="/dashboard/detail"
            element={
              <ParseRoute layout={true}>
               <NFTDetail />
              </ParseRoute>
            }
          />
          <Route
            path="/customer"
            element={
              <ParseRoute layout={true}>
                <User />
              </ParseRoute>
            }
          />
          <Route
            path="/customer/detail"
            element={
              <ParseRoute layout={true}>
                <UserDetail />
              </ParseRoute>
            }
          />
          <Route
            path="/apimanagement"
            element={
              <ParseRoute layout={true}>
                <APIManagement />
              </ParseRoute>
            }
          />
         
          <Route
            path="/apilog_detail/:id"
            element={
              <ParseRoute layout={true}>
                <APIManagement />
              </ParseRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ParseRoute layout={true}>
                <AdminProfile />
              </ParseRoute>
            }
          />
        
            
          
          
          <Route path="/activity" element={<Activity />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/create" element={<Create />}>
            <Route path="" element={<ChooseBlockchain />} />
            <Route path="blockchain" element={<ChooseBlockchain />} />
            <Route path="type" element={<ChooseType />} />
            <Route path="create" element={<CreateComp />} />
            <Route path="collection" element={<CreateCollection />} />
          </Route>
          <Route path="/detail" element={<Detail />} />
          <Route path="/drops" element={<Drops />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover-collection" element={<Explore />} />
          <Route path="/discover/:category" element={<Discover />} />
          <Route path="/collection" element={<Collection />} />
         
          <Route path="/settings" element={<Settings />}>
            <Route path="" element={<ProfileSetting />} />
            <Route path="profile" element={<ProfileSetting />} />
            <Route path="communication" element={<CommunicationSetting />} />
            <Route path="security" element={<SecuritySetting />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </Wrapper> */}
      {/* <Contact />
      <Footer /> */}
    </Container>
  );
}

export { Root };
