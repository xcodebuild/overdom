import { render, h, reactive, computed } from "../src";
import { waitBatch } from './utils';
import '../src/polyfill/createRange';

describe('LifeCycle', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
    });
    it('should trigger on Mount', async () => {
        let mounted = false;
        class App {
            onMount() {
                mounted = true;
            }
            render() {
                return <div>Hey</div>;
            }
        }
        expect(mounted).toEqual(false);
        render(<App />, document.body);
        await waitBatch();
        expect(mounted).toEqual(true);
    });

    it('onMount & onDestory', async () => {
        let oneMount = false;
        let twoMount = false;
        class ComponentOne {
            render() {
              return <div>ONE</div>;
            }
            onMount() {
                oneMount = true;
            }
            onDestory() {
                oneMount = false;
            }
          }
          class ComponentTwo {
            render() {
              return <div>TWO</div>;
            }
            onMount() {
                twoMount = true;
            }
            onDestory() {
                twoMount = false;
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
              return <button id="switch" onClick={this.handleClick}>
                <Comp />
              </button>;
            }
          }
          render(<App />, document.body);
          expect(oneMount).toEqual(false);
          expect(twoMount).toEqual(false);

          await waitBatch();
          expect(oneMount).toEqual(true);
          expect(twoMount).toEqual(false);
          
          // click to render component two
          document.getElementById('switch')!.click();
          await waitBatch();
          expect(oneMount).toEqual(false);
          expect(twoMount).toEqual(true);

          // click to render component one back
          document.getElementById('switch')!.click();
          await waitBatch();
          expect(oneMount).toEqual(true);
          expect(twoMount).toEqual(false);
    });
});