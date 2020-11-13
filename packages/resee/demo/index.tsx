import { h, reactive, render, autorun, $map, computed, $if } from "../src";


export default class App {
  static count = 0;
  @reactive list = [{
    id: App.count++,
    text: 'todo',
    completed: false,
  }];
  @reactive input = '';

  addTodo() {
      // use array.push/splice/shift/unshift to mutate
      this.list.push({
        id: App.count++,
        text: this.input,
        completed: false,
      });
      this.input = '';
  }

  handleSwap(index: number) {
    const temp = [this.list[index], this.list[index + 1]];
    this.list.splice(index, 2, temp[1], temp[0]);
  }

  render () {
    return <ul>
      <input value={this.input} onInput={(e) => this.input = e.target.value}></input>
      <button onClick={this.addTodo}>ADD TODO</button>
      {$map(
          this.list,  // array
          (item) => {
              // map
              // item.value mean item
              // item.index mean index
              return <div>
                  [{item.index}] {item.value.text}
                  <button onClick={() => this.list.splice(item.index, 1)}>REMOVE</button>
                  {$if(
                    () => item.index < this.list.length - 1,
                    () => <button onClick={() => this.handleSwap(item.index)}>SWAP NEXT</button>,
                    () => <span>[THE LAST]</span>
                  )}
              </div>;
          },
          (item) => {
              // key map, alternative to <li key> in React
              // must be string or number, and keep unique in list
              return item.value.id;
          }
      )}
    </ul>;
  }
}

render(<App />, document.body);