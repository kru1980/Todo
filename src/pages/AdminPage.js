import React from "react";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import AdminComponent from "../components/AdminComponent/AdminComponent";

const AdminPage = ({ auth: { uid }, profile, state, users }) => {
  if (!uid || profile.role !== "admin") {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <AdminComponent users={users} />
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    users: state.firestore.ordered.users,
    state
  };
};

export default compose(
  firestoreConnect([
    {
      collection: "users",
      orderBy: ["displayName", "desc"]
      // where: [["role", "==", "admin"]]
    }
  ]),
  connect(mapStateToProps)
)(AdminPage);
