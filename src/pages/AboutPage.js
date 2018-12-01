import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AboutPage = ({ auth }) => {
  if (!auth.uid) return <Redirect to="/signInPage" />;
  return <div style={{ marginTop: 67 }}>AboutPage</div>;
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(AboutPage);
