# Getting Started

## Hello world

```demo
export default class Hello {
    render() {
        return <div>Hello World</div>;
    }
}
```

## State

We can use `@reactive` to make attribute reactive

- Use in `JSX`
- Mutate it to update in callbacks

```demo
export default class CounterApp {
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
```

## Computed

- `@computed get x()` to create computed
- computed result is same with reactive but readonly

### Example
```demo
export default class CounterApp {
    @reactive count = 0;
    @computed get doubleCount() {
        return this.count * 2;
    }
    inc() {
        this.count ++;
    }

    render() {
        return <div>
            <p> Counter: {this.count} </p>
            <p> Double: {this.doubleCount} </p>
            <p>
                <button onClick={this.inc}>ADD</button>
            </p>
        </div>;
    }
}
```

## Component

- Class with `rendeer` is just component
- `this.props` is a object, you will need to add `@reactive` for it if need reactive

```demo
class Display {
    @reactive props;
    render() {
        return <p>I will display count from {'<Display/>'}: {this.props.count}</p>;
    }
}

export default class CounterApp {
    @reactive count = 0;
    inc() {
        this.count ++;
    }
    render() {
      return <div>
        <Display count={this.count}/>
        <p>
            <button onClick={this.inc}>ADD</button>
        </p>
      </div>;
    }
}
```

## Logic

### $if

Use `$if` to do a switch logic in `JSX`.

```demo
export default class CounterApp {
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

        <p>count >= 3 : 
        {$if(
            // cond
            () => this.count >= 3,
            // yes
            () => <div>YES {this.count}</div>,
            // NO
            () => <div>NO {this.count}</div>,
        )}
        </p>
      </div>;
    }
    
}
```

### $map

Use `$map` for a list map

```demo
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
```

## Todo Example

```demo
let count = 0;
export default class App {
  @reactive list = [{
    id: count++,
    text: 'todo',
    completed: false,
  }];
  @reactive input = '';

  addTodo() {
      // use array.push/splice/shift/unshift to mutate
      this.list.push({
        id: count++,
        text: this.input,
        completed: false,
      });
      this.input = '';
  }

  handleSwap(index) {
    // use splice to swap items
    // reactive array can not track native swap
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
```

## PlayGround

Play online with [CodeSandbox](https://codesandbox.io/s/naughty-hill-ugkgj?file=/src/index.tsx)
