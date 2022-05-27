import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import { Navbar, Footer } from "@components";
import Home from "@pages/home";
import Cars from "@pages/cars";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Navbar />
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cars" component={Cars} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
