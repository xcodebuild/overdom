import { h, reactive, render, autorun, $map, computed } from "../src";


class Counter {
    @reactive count = 1;
    @computed get double() {
        return this.count * 2;
    }
    @autorun task() {
    }
    
}

class App {
    @reactive counter = new Counter();
    count = 1;

    render() {
        return <div>
            Hello {this.counter.double}
            <button onClick={() => this.counter.count ++}>ADD</button>    
        </div>;
    }
}

render(<App />, document.body);

