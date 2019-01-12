import React from "react";

import { Row, Col, Menu, Icon } from "antd";
import { Route, Switch, withRouter } from "react-router-dom";
// import ToolbarLinkUI from "./ToolbarLinkUI";
// import SignedLinks from "./SignedLinks";
// import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import PandaIcon from "./Logo";

import "./NavBar.css";

const MenuItemGroup = Menu.ItemGroup;
// const { auth, profile } = props;
const authuid = false;
// const links = authuid ? <SignedLinks /> : <SignedOutLinks />;

class NavBar extends React.Component {
  state = {
    current: "logo"
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
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item style={{ paddingLeft: 20 }} key="logo" title="Logo">
          Logo
        </Menu.Item>
        <Menu.Item key="aboutPage">
          <Icon type="appstore" />
          About
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
