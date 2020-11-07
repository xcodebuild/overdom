import { h, reactive, $if, $map, render, ReactiveHandler } from "../src";

let count = 0;
const todoList = reactive([
  {
    text: "todo",
    done: false,
    id: count++
  }
]);

const Item = (props: {
  text: ReactiveHandler<string>;
  done: ReactiveHandler<boolean>;
  index: ReactiveHandler<number>;
}) => {
  const handleRemove = (index: number) => {
    todoList(todoList.filter((item, i) => i === index));
  };
  const handleSwap = (index: number) => {
    todoList(
      todoList().map((item, i) => {
        if (i === index + 1) {
          return todoList[index]();
        } else if (i === index) {
          return todoList[index + 1]();
        }
        return todoList[i]();
      })
    );
  };
  return (
    <li>
      {props.text}
      <button onClick={() => handleRemove(props.index())}>REMOVE</button>
      {$if(
        () => props.index() !== todoList().length - 1,
        () => (
          <button onClick={() => handleSwap(props.index())}>SWAP NEXT</button>
        ),
        () => (
          <button>END NO SWAP</button>
        )
      )}
    </li>
  );
};

const App = () => {
  const title = reactive("");

  const handleChange = (e: InputEvent) => {
    // @ts-ignore
    title(e.target.value);
  };

  // count() return count reactive value
  // count(val) set count reactive value to val
  const addTodo = () => {
    todoList(
      todoList().concat({
        text: title(),
        done: false,
        id: count++
      })
    );
    title("");
  };

  return (
    <div>
      <input value={title} onInput={handleChange}></input>
      <button onClick={addTodo}>ADD</button>
      <div>
        <ul>
          {$map(
            todoList,
            ($item, $index) => (
              <Item text={$item.text} done={$item.done} index={$index}></Item>
            ),
            ($item, $index) => $item.id()
          )}
        </ul>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("app")!);
