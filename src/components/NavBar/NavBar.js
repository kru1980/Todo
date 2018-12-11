import React from "react";

import { Row, Col, Menu, Icon } from "antd";
import { Route, Switch, withRouter } from "react-router-dom";
// import ToolbarLinkUI from "./ToolbarLinkUI";
// import SignedLinks from "./SignedLinks";
// import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import PandaIcon from "./Logo";

const MenuItemGroup = Menu.ItemGroup;
// const { auth, profile } = props;
const authuid = false;
// const links = authuid ? <SignedLinks /> : <SignedOutLinks />;

class NavBar extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
    if (e.key === "logo") {
      this.props.history.push(`/`);
    } else this.props.history.push(`/${e.key}`);
  };

  render() {
    console.log("props nawbar", this.props);

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: "48px" }}
      >
        <Menu.Item key="logo">Logo</Menu.Item>
        <Menu.Item key="aboutPage">
          <Icon type="appstore" />
          About
        </Menu.Item>
        <Menu.Item key="signInPage">
          <Icon type="appstore" />
          Navigation Three
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
