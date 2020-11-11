import { h, reactive, render, autorun, run, $map } from "../src";
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
            return <div>[{item.index}] {item.value}</div>;
        },
        (item) => {
            // key map, alternative to <li key> in React
            // must be string or number, and keep unique in list
            return item.value;
        }
    )}
  </ul>;
}

render(<App/>, document.body);