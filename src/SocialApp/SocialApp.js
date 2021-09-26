import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import data from "../Global/dataBase.json";
import { addUsers, addFriend, viewProfile } from "../Global/social";
import { Link } from "react-router-dom";

const SocialApp = () => {
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.persistedReducer.user);

  useEffect(() => {
    dispatch(addUsers(data));
    // console.log(file);
  }, []);

  return (
    <Container>
      <Wrapper>
        {fileData.map((props) => (
          <Card key={props.id}>
            <Image src={props.image} />
            <Content>
              <Name>{props.name}</Name>
              <Stack>{props.email}</Stack>
              <Email>{props.stack}</Email>
              <div>
                <Link to="/details">
                  <MyButton
                    type="primary"
                    danger
                    onClick={() => {
                      dispatch(viewProfile(props));
                    }}
                  >
                    View Details
                  </MyButton>
                </Link>
                <MyButton
                  onClick={() => {
                    // dispatch(addFriend(props));
                  }}
                >
                  Add to FriendList
                </MyButton>
              </div>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SocialApp;

const MyButton = styled(Button)`
  margin-bottom: 10px;
  font-weight: bold;
  height: 40px;
`;
const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: lightblue;
  border: 2px solid lightgray;
  border-radius: 5px;
  transform: scale(1);
  transition: all 350ms;
  margin: 10px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  border: 2px solid gray;

  :hover {
    border: 2px solid gray;
    box-shadow: rgb(0 0 0 / 29%) 0px 16px 30px -10px;
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  background-color: red;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Name = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
`;

const Stack = styled.div`
  font-style: italic;
  margin: 5px 0;
`;
const Email = styled.div`
  font-style: italic;
  font-weight: bold;
  margin: 5px 0;
  flex: 1;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 150px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
