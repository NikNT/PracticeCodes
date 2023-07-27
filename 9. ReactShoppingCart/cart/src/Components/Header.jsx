import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Dropdown,
  Badge,
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";

const Header = () => {
  const {
    state: { cart },
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search"
            className="m-auto"
          />
        </Navbar.Text>
        <Dropdown className="m-2" alignRight>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart color="white" fontSize={25} />
            <Badge>{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 300 }}>
            {cart.length > 0 ? (
              <span>Cart Not Empty</span>
            ) : (
              <span style={{ padding: 10 }}>Cart Empty!</span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
