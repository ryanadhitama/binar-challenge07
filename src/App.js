import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import { Navbar, Footer } from "@components";
import Home from "@pages/home";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header>
            <Navbar />
          </Header>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
