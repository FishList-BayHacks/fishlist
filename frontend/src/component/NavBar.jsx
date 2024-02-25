import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShip } from "react-icons/fa";

const Nav = styled.nav`
  position: fixed;
  height: 30px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fefefe;
  color: #022a39;
  padding: 10px 20px;
  z-index: 100;
  width: 100%;
`;

const NavLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  a {
    color: #022a39;
    margin-left: 20px;
    text-decoration: none;
    margin-right: 50px;
    &:hover {
      color: #036285;
    }
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      <NavLinks>
        <Link to="/">
          <FaShip size={20} className="FaShip" />
        </Link>
        <Link to="/fish-list">FishList</Link>
      </NavLinks>
    </Nav>
  );
};
