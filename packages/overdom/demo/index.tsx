import { h, reactive, render, autorun, $map, computed, $if } from "../src";
import { createReactive } from "../src/reactive";

class ComponentOne {
    render() {
      return <div>ONE</div>;
    }
  }
  class ComponentTwo {
    render() {
      return <div>TWO</div>;
    }
  }
  class App {
    @reactive isComponentOne = true;
    @computed get component() {
      return this.isComponentOne ? ComponentOne: ComponentTwo;
    }
    handleClick() {
      this.isComponentOne = !this.isComponentOne;
    }
    render () {
      const Comp = this.component;
      return <button onClick={this.handleClick}>
        <Comp />
      </button>;
    }
  }
  render(<App />, document.body);
  
