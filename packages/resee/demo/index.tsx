import { h, reactive, render, autorun, $map, computed } from "../src";

class Hello {
    @reactive props!: {
      name: string,
    }
    render() {
      return <div>Hello {this.props.name}</div>
    }
  }
  
  let app!: App;

  class App {
    @reactive name = 'name';
    
    render() {
      return (
        <div>
          <button id="getThis" onClick={() => {app = this}}></button>

          <Hello name="test" />
          <Hello name={this.name} />
        </div>
      );
    }
  }
  render(<App />, document.body);