import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Friends from "./Friends/Friends";
import Header from "./Friends/Header";
import FriendList from "./Friends/FriendList";
import "antd/dist/antd.css";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Friends} />
          <Route exact path="/friendlist" component={FriendList} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;

const Container = styled.div``;
const Wrapper = styled.div``;
