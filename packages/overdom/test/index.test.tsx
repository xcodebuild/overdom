import { render, h, reactive, $if, computed } from '../src';
import { $map } from '../src/directive';
import '../src/polyfill/createRange';
import { waitBatch } from './utils';

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
    class App {
      @reactive count = 0;
      handleClick() {
        this.count ++;
      }
      render () {
        return <button onClick={this.handleClick}>Count {this.count}</button>;
      }
    }
    render(<App />, document.body);
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    document.body.querySelector('button')!.click();
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('can render mutiple items', async () => {
    class App {
      @reactive count = 0;
      handleClick() {
        this.count ++;
      }
      render () {
      return <div><button onClick={this.handleClick}>CLICK</button>Count {this.count}</div>;
      }
    }
    render(<App />, document.body);
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    document.body.querySelector('button')!.click();
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('$if works', async () => {
    class App {
      @reactive count = 1;
      handleClick() {
        this.count++;
      }
      render() {
        return <div>
          <button onClick={this.handleClick}>Count {this.count}</button>
          <div>
            Bigger than 2
            {$if(
              () => this.count > 2,
              () => (
                <span>YES {this.count}</span>
              ),
              () => (
                <span>NO {this.count}</span>
              )
            )}
          </div>
        </div>;
      }
    }

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

    let app!: App;
    class App {
      @reactive list = generateTodo([1]);
      render() {
        return <ul>
          <button id="getThis" onClick={() => {app = this}}>
          </button>
          {$map(
            this.list,
            item => (
              <li>
                Text {item.value.text}
                [ID {item.index}]
              </li>
            ),
            item => {
              return item.value.text;
            }
          )}
        </ul>
      }
    }

    render(<App />, document.body);
    await waitBatch();
    document.getElementById('getThis')!.click();

    await waitBatch();

    const todos = generateTodo([1, 2, 3, 4]);

    // ADD
    // 1 2 3 4
    app.list.push(todos[1]);
    app.list.push(todos[2]);
    app.list.push(todos[3]);

    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    // REMOVE
    // 1 2 4
    app.list.splice(2, 1);

    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    // MOVE
    // 1 4 2
    app.list.splice(1, 1);
    app.list.push(todos[1]);

    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('attr can be reactive', async () => {
    class App {
      @reactive count = 0;
      render() {
        return (
          <ul className={this.count}>
            <button
              className={this.count}
              onClick={() => {
                this.count++;
              }}
            >
              CLICK {this.count}
            </button>
          </ul>
        );
      }
    }
    render(<App />, document.body);
    await waitBatch();

    expect(document.body.innerHTML).toMatchSnapshot();

    document.querySelector('button')?.click();

    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('props should be reactive', async () => {

    class Hello {
      @reactive props!: {
        name: string,
      }
      render() {
        return <div>Hello {this.props.name}</div>
      }
    }
    
    let app!: App;

    class App {
      @reactive name = 'name';
      render() {
        return (
          <div>
            <button id="getThis" onClick={() => {app = this}}></button>

            <Hello name="test" />
            <Hello name={this.name} />
          </div>
        );
      }
    }
    render(<App />, document.body);
    await waitBatch();
    document.getElementById('getThis')!.click();

    expect(document.body.innerHTML).toMatchSnapshot();

    app.name = 'newName';
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });


  it('can reactive a component', async () => {
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
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    document.body.querySelector('button')!.click();
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();

    document.body.querySelector('button')!.click();
    await waitBatch();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('ref should get DOM', async () => {
    let refDom: HTMLElement;
    class App {
      onRef(dom: HTMLElement) {
        refDom = dom;
      }
      render() {
        return <div id="target" ref={this.onRef}></div>;
      }
    }
    render(<App />, document.body);

    await waitBatch();
    expect(refDom!).toEqual(document.getElementById('target')!);
  });
});
