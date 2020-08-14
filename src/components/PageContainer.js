import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/books/bookAction";

const PageContainer = (props) => {
  const { name, request, changeNameInRedux } = props;

  return (
    <div>
      <h1>{name}</h1>
      {request ? <h1>Loading...</h1> : null}
      <button onClick={() => changeNameInRedux("Kajal")}>CLick here</button>
    </div>
  );
};

export default connect(
  (state) => ({ name: state.name, request: state.request }),
  (dispatch) => ({
    changeNameInRedux: (newName) => dispatch(fetchUser(newName)),
  })
)(PageContainer);
