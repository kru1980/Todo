import React, { Component } from "react";
import { Layout } from "antd";

class Home extends Component {
  render() {
    const { Content, Sider } = Layout;
    return (
      <div>
        <Layout>
          <Content style={{ marginTop: "64px" }}>
            <div style={{ padding: 24, background: "orange" }}>content</div>
          </Content>

          <Sider
            theme="light"
            width="400"
            style={{
              padding: 24,
              marginTop: "64px",
              background: "green",
              height: "80vh"
            }}
          >
            <h4>hello sidebar</h4>
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default Home;
