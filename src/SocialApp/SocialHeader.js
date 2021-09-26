import React from "react";
import styled from "styled-components";
import logo from "./6.png";
import { AiFillSetting, AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SocialHeader = () => {
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.persistedReducer.friends);

  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Logo src={logo} />
          <Nav to="/">
            <AiFillHome />
          </Nav>
          <Nav to="/friends">
            <FaUserFriends />
            <span>{fileData.length}</span>
          </Nav>
          <Nav to="/settings">
            <AiFillSetting />
          </Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default SocialHeader;

const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #40061c;
  color: white;
  position: fixed;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
`;
const Nav = styled(Link)`
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;
  transform: scale(1);
  margin: 0 10px;
  font-size: 25px;
  color: white;

  span {
    font-size: 9px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    /* background-color: green; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    transition: all 350ms;
  }

  :hover {
    transform: scale(1.09);
    background-color: rgba(255, 255, 255, 0.6);
    color: white;

    span {
      font-size: 9px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
    }
  }
`;

const Logo = styled.img`
  width: 300px;
  height: 60px;
  object-fit: contain;
  margin-left: 30px;
  margin-right: 30px;
`;
