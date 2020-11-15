import { render, h } from "../src";
import { waitBatch } from './utils';

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
});