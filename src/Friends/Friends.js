import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const Friends = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Image />
          <Content>
            <Name>name</Name>
            <Stack>name</Stack>
            <MyButton>Add to FriendList</MyButton>
          </Content>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Friends;

const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: lightblue;
  border: 2px solid lightgray;
  border-radius: 5px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(1.02);
    box-shadow: rgb(0 0 0 / 29%) 0px 16px 30px -10px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 250px;
  background-color: red;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;
const Stack = styled.div`
  flex: 1;
  font-style: italic;
`;
const Content = styled.div`
  height: 140px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const MyButton = styled(Button)`
  font-weight: bold;
  height: 40px;
`;
const Name = styled.div`
  margin: 20px 0;
  font-weight: bold;
  text-transform: uppercase;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 100px;
`;
