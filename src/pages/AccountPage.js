import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AccountComponent from "../components/AccountComponent/AccountComponent";

const AccountPage = ({ auth, profile }) => {
  if (!auth.uid) return <Redirect to="/signInPage" />;
  return (
    <div>
      <AccountComponent profile={profile} />
    </div>
  );
};

export default connect(state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
})(AccountPage);
