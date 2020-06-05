import React, { Component } from "react";
import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions/actionsTypes";
import * as actionCreators from "../../store/actions/index";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    buttons: [
      { name: "Increment", value: 1 },
      { name: "Decrement", value: -1 },
      { name: "Add 5", value: 5 },
      { name: "Subtract 5", value: -5 },
    ],
  };
  render() {
    const { counter, results } = this.props;
    const counterControls = this.state.buttons.map((control) => (
      <CounterControl
        key={control.name}
        label={control.name}
        clicked={() => this.props.onHandlerCounter(control.value)}
      />
    ));

    return (
      <div>
        <CounterOutput value={counter} />
        {counterControls}
        <hr />
        <button onClick={() => this.props.onStoreResult(counter)}>
          Store Result
        </button>
        <ul>
          {results.map((result) => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Only One Reducer
// const mapStateToProps = ({ counter, results }) => ({ counter, results });

// Nested Reducers
const mapStateToProps = ({ ctr, res }) => ({
  counter: ctr.counter,
  results: res.results,
});

const mapDispatchToProps = (dispatch) => ({
  onHandlerCounter: (value) => dispatch(actionCreators.counter(value)),
  onStoreResult: (value) => dispatch(actionCreators.storeResults(value)),
  onDeleteResult: (value) => dispatch(actionCreators.deleteResults(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
