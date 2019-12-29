import React from "react";
import ReactDOM from "react-dom";
import { createOvermind } from "overmind";
import { createHook, Provider } from "overmind-react";
import "./styles.css";

const app = createOvermind({
  state: {
    count: 1,
    mean: 2
  },
  actions: {
    increaseCount({ state }) {
      state.count = 2 * state.count;
      state.mean = (3 / 2) * state.count;
    },
    decreaseCount({ state }) {
      state.count = state.count / 2;
      state.mean = state.count;
    }
  }
});

const useApp = createHook();

function App() {
  const { state, actions } = useApp();

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <h1>{state.mean}</h1>
      <button onClick={() => actions.decreaseCount()}>decrease</button>
      <button onClick={() => actions.increaseCount()}>double</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider value={app}>
    <App />
  </Provider>,
  rootElement
);
