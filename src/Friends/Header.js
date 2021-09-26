import React from "react";
import styled from "styled-components";
import logo from "./Kobis.png";
// import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Nav to="/">
            <AiFillHome />
          </Nav>
          <Nav to="/friendlist">
            <FaUserFriends />
            <span>10</span>
          </Nav>
          <Nav to="/settings">
            <AiFillSetting />
          </Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Logo = styled.img`
  margin: 0 20px;
  width: 300px;
  height: 70px;
  object-fit: contain;
`;
const Navigation = styled.div`
  width: 100%;
  display: flex;
`;

const Nav = styled(Link)`
  width: 60px;
  height: 45px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  transform: scale(1);
  color: white;
  font-size: 20px;
  margin: 0 5px;

  span {
    font-size: 10px;
    margin-left: 5px;
    font-weight: bold;
  }

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.09);
    color: black;

    span {
      background-color: green;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 8px;
      color: white;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #011d47;
  color: white;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
