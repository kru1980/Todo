import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Toolbar.css";
import { hakLength } from "../../selectors";
import { Affix } from "antd";

class Toolbar extends Component {
  render() {
    const { countTasks } = this.props;

    const style = {
      fontSize: "24px",
      color: "black",
      padding: "0px",
      margin: "0px"
    };
    return (
      <div>
        <Affix>
          <div className="wraper-toolBar">
            <div>
              <Link style={style} to="/">
                Toolbar
              </Link>
            </div>
            <div>
              <h4>
                Количество задач: <span>{countTasks}</span>
              </h4>
            </div>
          </div>
        </Affix>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countTasks: hakLength(state)
  };
};

export default connect(mapStateToProps)(Toolbar);
