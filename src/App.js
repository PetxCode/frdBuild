import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SocialApp from "./SocialApp/SocialApp";
import SocialFriends from "./SocialApp/SocialFriends";
import SocialDetails from "./SocialApp/SocialDetails";
import SocialHeader from "./SocialApp/SocialHeader";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <BrowserRouter>
          <SocialHeader />
          <Switch>
            <Route exact path="/" component={SocialApp} />
            <Route exact path="/friends" component={SocialFriends} />
            <Route exact path="/details" component={SocialDetails} />
          </Switch>
        </BrowserRouter>
      </Wrapper>
    </Container>
  );
};

export default App;

const Container = styled.div``;
const Wrapper = styled.div``;
