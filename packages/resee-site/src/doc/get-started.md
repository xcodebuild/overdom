# Getting Started

## Hello world

```demo
export default function Hello() {
    return <div>Hello World</div>;
}
```

## State

We can use `reactive(object)` to create state model.

- Use in `JSX`
- Mutate it to update in callbacks

```demo
export default function CounterApp() {
    const counter = reactive({
        count: 0,
    });
    const inc = () => counter.count ++;
    return <div>
        Counter: {counter.count}
        <p>
            <button onClick={inc}>ADD</button>
        </p>
    </div>;
}
```

## Computed

- `get x()` in `reactive(object)` to create computed
- computed result is same with reactive but readonly

### Example
```demo
export default function CounterApp() {
    const counter = reactive({
        count: 0,
        // get means computed
        get doubleCount() {
            return counter.count * 2;
        }
    });
    const inc = () => counter.count ++;
    return <div>
        <p> Counter: {counter.count} </p>
        <p> Double: {counter.doubleCount} </p>
        <p>
            <button onClick={inc}>ADD</button>
        </p>
    </div>;
}
```

## Component

- Function is just component
- Props is a object (maybe reactive)

```demo
function Display({ count }) {
    return <p>I will display count from {'<Display/>'}: {count}</p>;
}
export default function CounterApp() {
    const counter = reactive({
        count: 0,
    });
    const inc = () => counter.count ++;
    return <div>
        <Display count={counter.count}/>
        <p>
            <button onClick={inc}>ADD</button>
        </p>
    </div>;
}
```

## Logic

### $if

Use `$if` to do a switch logic in `JSX`.

```demo
export default function CounterApp() {
    const counter = reactive({
        count: 0,
    });
    const inc = () => counter.count ++;

    return <div>
        Counter: {counter.count}
        <p>
            <button onClick={inc}>ADD</button>
        </p>

        <p>count >= 3 : 
        {$if(
            // cond
            () => counter.count >= 3,
            // yes
            () => <div>YES {counter.count}</div>,
            // NO
            () => <div>NO {counter.count}</div>,
        )}
        </p>
    </div>;
}
```

### $map

Use `$map` for a list map

```demo
let count = 0;

export default function App() {
  const todolist = reactive({
      list: ['test' + count ++ ],
  });

  const addTodo = () => {
      // use array.push/splice/shift/unshift to mutate
      todolist.list.push('new todo' + count ++);
  }

  return <ul>
    <button onClick={addTodo}>ADD TODO</button>
    {$map(
        todolist.list,  // array
        (item) => {
            // map
            // item.value mean item
            // item.index mean index
            return <div>
                [{item.index}] {item.value}
                <button onClick={() => todolist.list.splice(item.index, 1)}>REMOVE</button>
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


```