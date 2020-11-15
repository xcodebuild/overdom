import { render, h, Component } from "../src";
import { waitBatch } from './utils';
import '../src/polyfill/createRange';

describe('LifeCycle', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
    });
    it('props could get from constructor', async () => {
        let propName = '';
        class Hello extends Component {
            constructor(props: {
                name: string
            }) {
                super(props);
                propName = props.name;
            }
            render() {
                return <div>Hey</div>;
            }
        }
        class App extends Component {
            render() {
                return <div>
                    <Hello name="test"/>
                </div>
            }
        }
        expect(propName).toEqual('');
        render(<App />, document.body);
        await waitBatch();
        expect(propName).toEqual('test');
    });
});