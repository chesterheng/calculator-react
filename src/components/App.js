import React, { Component } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

class App extends Component {

  handleNumber = event => {
    this.props.enterNmber(event.target.innerText);
  }

  handleOperator = event => {
    this.props.enterOperator(event.target.innerText);
  }

  handleEvaluate = () => {
    this.props.enterEvaluate();
  }

  handleDecimal = () => {
    this.props.enterDot();
  }

  handleAC = () => {
    this.props.enterAC();
  }

  render() {
    return (
      <Container className="text-center">
        <h4>JavaScript Calculator</h4>
        <div id="main">
          <label id="display">{this.props.currentVal}</label>
          <button onClick={this.handleAC} id="clear">AC</button>
          <button onClick={this.handleOperator} id="divide">/</button>
          <button onClick={this.handleOperator} id="multiply">*</button>
          <button onClick={this.handleNumber} id="seven">7</button>
          <button onClick={this.handleNumber} id="eight">8</button>
          <button onClick={this.handleNumber} id="nine">9</button>
          <button onClick={this.handleOperator} id="minus">-</button>
          <button onClick={this.handleNumber} id="four">4</button>
          <button onClick={this.handleNumber} id="five">5</button>
          <button onClick={this.handleNumber} id="six">6</button>
          <button onClick={this.handleOperator} id="plus">+</button>
          <button onClick={this.handleNumber} id="one">1</button>
          <button onClick={this.handleNumber} id="two">2</button>
          <button onClick={this.handleNumber} id="three">3</button>
          <button onClick={this.handleNumber} id="zero">0</button>
          <button onClick={this.handleDecimal} id="dot">.</button>
          <button onClick={this.handleEvaluate} id="equal">=</button>
        </div>
      </Container>
      
    );
  }
}

const mapStateToProps = ({ currentVal }) => ({
  currentVal
})

export default connect(
  mapStateToProps,
  actions
)(App);

// const INITIAL_STATE = {
//   currentVal: '0',
//   prevVal: '0',
//   formula: '',
//   currentSign: 'pos',
//   lastClicked: ''
// }