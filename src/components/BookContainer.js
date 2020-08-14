import React, { Component } from "react";
import { buyBooks } from "../redux";
import { connect } from "react-redux";
import { name2 } from "";
const BookContainer = (props) => {
  return (
    <div>
      <h1>Number of books-{props.numberofBooks}</h1>

      <button onClick={props.buyBooks}>Buy Books</button>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    numberofBooks: state.numberofBooks,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    buyBooks: function () {
      dispatch(buyBooks()); //call bookreducer
    },
  };
};
export default connect(mapStatetoProps, mapDispatchProps)(BookContainer);
