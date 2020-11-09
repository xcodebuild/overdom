import { render, h, reactive, $if } from '../src';
import { schedule } from '../src/batcher';
import { $map } from '../src/directive';
import { component } from '../src/h';
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
      const count = reactive(0);
      const handleClick = () => {
        count(count() + 1);
      };
      return <button onClick={handleClick}>Count {count}</button>;
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
      const count = reactive(0);
      const handleClick = () => {
        count(count() + 1);
      };
      return (
        <div>
          <button onClick={handleClick}>CLICK</button>
          Count {count}
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
      const count = reactive(1);

      const handleClick = () => {
        count(count() + 1);
      };

      return (
        <div>
          <button onClick={handleClick}>Count {count}</button>
          <div>
            Bigger than 2
            {$if(
              () => count() > 2,
              () => (
                <span>YES {count}</span>
              ),
              () => (
                <span>NO {count}</span>
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

    const todoList = reactive(generateTodo([1]));

    const App = () => {
      return (
        <ul>
          {$map(
            todoList,
            (item, index) => (
              <li>
                Text {item.text}
                [ID {index}]
                <button
                  onClick={() =>
                    (document.body.innerHTML =
                      document.body.innerHTML + index())
                  }
                ></button>
              </li>
            ),
            item => {
              return item.text();
            }
          )}
        </ul>
      );
    };

    render(<App />, document.body);

    // ADD
    todoList(generateTodo([1, 2, 3, 4]));

    await waitBatch();
    document.body.querySelectorAll('button').forEach(btn => btn.click());
    expect(document.body.innerHTML).toMatchSnapshot();

    // REMOVE
    todoList(generateTodo([1, 2, 4]));

    await waitBatch();
    document.body.querySelectorAll('button').forEach(btn => btn.click());
    expect(document.body.innerHTML).toMatchSnapshot();

    // MOVE
    todoList(generateTodo([1, 4, 2]));

    await waitBatch();
    document.body.querySelectorAll('button').forEach(btn => btn.click());
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('attr can be reactive', async () => {
    const App = () => {
      const count = reactive(0);
      return (
        <ul className={count}>
          <button className={count} onClick={() => count(count() + 1)}>
            CLICK {count}
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
    const Hello = component<{name: string}>(({ name }) => {
      return <div>Hello {name}</div>;
    });

    const reactiveName = reactive('name');

    const App = () => {
      return <div>
        <Hello name="test" />
        <Hello name={reactiveName} />
      </div>
    };

    render(<App />, document.body);
    await waitBatch();

    expect(document.body.innerHTML).toMatchSnapshot();

    reactiveName('newName');
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

  });
});
