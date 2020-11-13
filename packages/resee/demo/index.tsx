import { h, reactive, render, autorun, $map, computed } from "../src";
let count = 0;

export default class App {
  @reactive list = ['test' + count ++];

  addTodo() {
      // use array.push/splice/shift/unshift to mutate
      this.list.push('new todo' + count ++);
  }

  render () {
    return <ul>
      <button onClick={this.addTodo}>ADD TODO</button>
      {$map(
          this.list,  // array
          (item) => {
              // map
              // item.value mean item
              // item.index mean index
              console.log(item.index)
              return <div>
                  [{item.index}] {item.value}
                  <button onClick={() => this.list.splice(item.index, 1)}>REMOVE</button>
              </div>;
          },
          (item) => {
              // key map, alternative to <li key> in React
              // must be string or number, and keep unique in list
              return item.value;
          }
      )}
    </ul>;
  }
}

  render(<App />, document.body);