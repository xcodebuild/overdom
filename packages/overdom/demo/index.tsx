import { h, reactive, render, autorun, $map, computed, $if, Component } from "../src";
import { createReactive } from "../src/reactive";
class Hello extends Component {
  @reactive props!: {
    name: string,
  }
  constructor(props) {
    super(props);
    console.log(this.props.name);
  }

  render() {
    return <div>Hello {this.props.name}</div>
  }
}

let app!: App;

class App extends Component {
  @reactive name = 'name';
  render() {
    return (
      <div>
        <button onClick={() => {this.name += ' test'}}>CLICK</button>

        <Hello name="test" />
        <Hello name={this.name} />
      </div>
    );
  }
}
render(<App />, document.body);