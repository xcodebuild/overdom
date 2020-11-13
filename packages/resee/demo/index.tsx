import { h, reactive, render, autorun, $map, computed } from "../src";
class App {
  @reactive count = 0;
  inc() {
      this.count ++;
  }
  render() {
      return <div>
          Counter: {this.count}
          <p>
              <button onClick={this.inc}>ADD</button>
          </p>
      </div>;
  }
}

  render(<App />, document.body);