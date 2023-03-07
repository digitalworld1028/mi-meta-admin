import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../providers";
import { categories, LinkItem, MENUITEM, SubMenuList } from "../../store";
import "./header.style.scss";
import {
  Row,
  Image,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";

const posts = [
  { id: "1", name: "This first post is about React", image: "/images/nft/1.png", count: "199" },
  { id: "2", name: "This next post is about Preact", image: "/images/nft/2.png", count: "32" },
  { id: "3", name: "We have yet another React post!", image: "/images/nft/3.png", count: "134" },
  { id: "4", name: "This is the fourth and final post", image: "/images/nft/4.png", count: "12" },
];

const filterPosts = (posts: any, inputval: any) => {
  if (!inputval) {
    return [];
  }

  return posts.filter((post: any) => {
    const postName = post.name.toLowerCase();
    return postName.includes(inputval.toLowerCase());
  });
};

function Header() {
  const { theme } = useContext(ThemeContext);
  const [searchval, setSearchval] = useState("");
  const navigate = useNavigate();
  // const [show, setShow] = useState(true);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [menuselected, setMenuselected] = useState("");
  const [dropitem, setDropitem] = useState("all nft");
  const [userItem, setUserItem] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLangOpen = () => {
    setIsLangOpen(true);
  };

  const handleLangClose = () => {
    setIsLangOpen(false);
  };

  const handleProfileOpen = () => {
    setIsProfileOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const changeValue = (val: any) => {
    setSearchval(val);
  };

  const navigate2discover = (val: any) => {
    setDropitem("all nft");
    setMenuselected(val);
    navigate("/discover-collection");
  };

  document.addEventListener("click", function () {
    handleClose();
  });

  const subitemclick = (val: any) => {
    setDropitem(val.toLowerCase());
  };

  const logout = (e:any) => {
    e.preventDefault();
    console.log("logout")
    localStorage.removeItem('id');
    localStorage.removeItem('authority');
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error:any) => {
      // An error happened.
    });
    navigate('/login')


  }

  const filteredPosts = filterPosts(posts, searchval);

  return (
    <Row className="header">
      <Navbar
        className="pt-0 pb-0"
        bg={`${theme}`}
        variant={`${theme === "dark" ? "dark" : "light"}`}
        expand="lg"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <Sidebar show={show} setShow={setShow} /> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto pull-width" />
            <InputGroup className="d-flex custom-input-group me-4">
              <FormControl
                type="search"
                placeholder="Search..."
                className={theme === "dark" ? "search-input-dark" : "search-input-light"}
                aria-label="Search"
                value={searchval}
                onChange={(e) => changeValue(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1" className="search-input-text-dark ps-3">
                <Image src={`/icons/cross.svg`} alt="" />
              </InputGroup.Text>
            </InputGroup>
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "140px" }} navbarScroll>
              <Nav.Link as="span">
                <Link
                  to="/notification"
                  className={`nav-link ${menuselected === MENUITEM[1] ? "selected_menu" : ""}`}
                  onClick={() => navigate2discover(MENUITEM[1])}
                >
                  <img src="/icons/alarm.svg" alt="alarm" />
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link
                  to="/message"
                  className={`nav-link ${menuselected === MENUITEM[2] ? "selected_menu" : ""}`}
                  onClick={() => navigate2discover(MENUITEM[2])}
                >
                  <img src="/icons/message.svg" alt="message" />
                </Link>
              </Nav.Link>
              <NavDropdown
                as="span"
                title={
                  <Stack direction="horizontal">
                    <Image src="/images/51.png" alt="avatar" rounded />
                    <span className="px-3">Roman Johanson</span>
                    <img src="/icons/arrow_down.png" alt="arrow" />
                  </Stack>
                }
                id="navbarScrollingDropdown"
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
                show={isOpen}
                className="avatar-dropdown"
              >
                <NavDropdown.Item
                  as="span"
                  href="#action/3.1"
                  className="avatar-dropdown-item"
                  onClick={() => subitemclick("all nft")}
                >
                  <Link to="#" onClick={(e)=>logout(e)}>Log out</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                as="span"
                title={
                  <Stack direction="horizontal">
                    <Image src="/icons/flag/en.png" alt="avatar" rounded />
                    <span className="ps-1 pe-3">EN</span>
                    <img src="/icons/arrow_down.png" alt="arrow" />
                  </Stack>
                }
                id="navbarScrollingDropdown"
                onMouseEnter={handleLangOpen}
                onMouseLeave={handleLangClose}
                show={isLangOpen}
                className="avatar-dropdown"
              >
                <NavDropdown.Item
                  as="span"
                  href="#action/3.1"
                  className="avatar-dropdown-item"
                  onClick={() => subitemclick("all nft")}
                >
                  <Link to="/assets">
                    <img src="/icons/flag/en.png" alt="en" className="pe-4" />
                    EN
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export { Header };
