import { render, h, reactive, $if, run } from '../src';
import { schedule } from '../src/batcher';
import { $map } from '../src/directive';
import '../src/polyfill/createRange';

const waitBatch = () =>
  new Promise(r => {
    schedule(r);
  });

describe('Basic', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });
  it('should render hello world', async () => {
    render(<div>Hello World</div>, document.body);
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('can reactive count', async () => {
    const App = () => {
      const counter = reactive({
        count: 0,
        handleClick() {
          counter.count++;
        },
      });

      return (
        <button onClick={counter.handleClick}>Count {counter.count}</button>
      );
    };
    render(<App />, document.body);
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    document.body.querySelector('button')!.click();
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('can render mutiple items', async () => {
    const App = () => {
      const counter = reactive({
        count: 0,
        handleClick() {
          counter.count++;
        },
      });
      return (
        <div>
          <button onClick={counter.handleClick}>CLICK</button>
          Count {counter.count}
        </div>
      );
    };
    render(<App />, document.body);
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    document.body.querySelector('button')!.click();
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('$if works', async () => {
    const App = () => {
      const counter = reactive({
        count: 1,
        handleClick() {
          counter.count++;
        },
      });

      return (
        <div>
          <button onClick={counter.handleClick}>Count {counter.count}</button>
          <div>
            Bigger than 2
            {$if(
              () => counter.count > 2,
              () => (
                <span>YES {counter.count}</span>
              ),
              () => (
                <span>NO {counter.count}</span>
              )
            )}
          </div>
        </div>
      );
    };

    render(<App />, document.body);
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    document.body.querySelector('button')!.click();
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    document.body.querySelector('button')!.click();
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    document.body.querySelector('button')!.click();
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('$mapKeyd works', async () => {
    const todoBuffer: {
      text: string;
      done: boolean;
    }[] = [];

    const generateTodo = (listKey: number[]) => {
      return listKey.map(key => {
        if (!todoBuffer[key]) {
          todoBuffer[key] = {
            text: 'new todo ' + key,
            done: false,
          };
        }
        return todoBuffer[key];
      });
    };

    const todoList = reactive({
      list: generateTodo([1]),
    });

    const App = () => {
      return (
        <ul>
          {$map(
            todoList.list,
            item => (
              <li>
                Text {item.value.text}
                [ID {item.index}]
                <button
                  onClick={() =>
                    (document.body.innerHTML =
                      document.body.innerHTML + item.index)
                  }
                ></button>
              </li>
            ),
            item => {
              return item.value.text;
            }
          )}
        </ul>
      );
    };

    render(<App />, document.body);

    const todos = generateTodo([1, 2, 3, 4]);

    // ADD
    // 1 2 3 4
    run(() => {
      todoList.list.push(todos[1]);
      todoList.list.push(todos[2]);
      todoList.list.push(todos[3]);
    });

    await waitBatch();
    document.body.querySelectorAll('button').forEach(btn => btn.click());
    expect(document.body.innerHTML).toMatchSnapshot();

    // REMOVE
    // 1 2 4
    run(() => {
      todoList.list.splice(2, 1);
    });

    await waitBatch();
    document.body.querySelectorAll('button').forEach(btn => btn.click());
    expect(document.body.innerHTML).toMatchSnapshot();

    // MOVE
    // 1 4 2
    run(() => {
      todoList.list.splice(1, 1);
      todoList.list.push(todos[1]);
    });

    await waitBatch();
    document.body.querySelectorAll('button').forEach(btn => btn.click());
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('attr can be reactive', async () => {
    const App = () => {
      const count = reactive({
        count: 0,
      });
      return (
        <ul className={count.count}>
          <button
            className={count.count}
            onClick={() => {
              count.count++;
            }}
          >
            CLICK {count.count}
          </button>
        </ul>
      );
    };

    render(<App />, document.body);
    await waitBatch();

    expect(document.body.innerHTML).toMatchSnapshot();

    document.querySelector('button')?.click();

    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('props should be reactive', async () => {
    const Hello = ({ name }: { name: string }) => {
      return <div>Hello {name}</div>;
    };

    const reactiveName = reactive({
      name: 'name',
    });

    const App = () => {
      return (
        <div>
          <Hello name="test" />
          <Hello name={reactiveName.name} />
        </div>
      );
    };

    render(<App />, document.body);
    await waitBatch();

    expect(document.body.innerHTML).toMatchSnapshot();

    run(() => {
      reactiveName.name = 'newName';
    });
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
