import {
  Navbar,
  NavLink,
  NavbarBrand,
  NavItem,
  Nav,
  Collapse,
  NavbarToggler,
  NavbarText
} from "reactstrap";

import '../App.css'

const NavBar = () => {
  return (
    <div>
      <Navbar
        expand="md"
        id="navbar"
        className="px-5"
        style={{ backgroundColor: "none", color: "#c1d1e8" }}
      >
        <NavbarBrand href="/">GameCo.</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/games">Video Games</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
