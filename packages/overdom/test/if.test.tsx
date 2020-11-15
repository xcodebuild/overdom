import { $if, reactive, h, render, Component } from "../src";
import { waitBatch } from './utils';

describe('Basic', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    it('$if do not update when cond result keep same', async () => {
        class App extends Component {
            @reactive count = 1;

            render() {
                return <div>
                    <button id="add" onClick={() => this.count ++}></button>
                    {$if(
                        () => this.count > 2,
                        () => <div>YES</div>,
                        () => <div id="no">NO</div>,
                    )}
                </div>;
            }
        }
        render (<App />, document.body);

        waitBatch();

        expect(document.body.innerHTML).toMatchSnapshot();
        const no = document.getElementById('no')!;

        document.getElementById('add')!.click();
        waitBatch();
        expect(document.body.innerHTML).toMatchSnapshot();

        expect(no === document.getElementById('no')!).toBeTruthy();

    });
});