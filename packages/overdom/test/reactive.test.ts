import { computed, reactive, Component } from "../src";
import { createReactive, runInHideRefMode } from '../src/reactive';

describe('Reactive', () => {
    it('computed should not trigger when result not change', () => {
        let moreThanThreeCount = 0;
        let yesOrNoCount = 0;
        class Model extends Component {
            @reactive count = 1;
            @computed get moreThanThree() {
                moreThanThreeCount ++;
                return this.count > 3;
            }
            @computed get yesOrNo() {
                yesOrNoCount ++;
                return this.moreThanThree ? 'YES': 'NO';
            }
        }

        const model = createReactive(new Model({}));
        // compute once
        runInHideRefMode(() => {
            expect(model.yesOrNo).toEqual('NO');
        })

        expect(moreThanThreeCount).toEqual(1);
        expect(yesOrNoCount).toEqual(1);

        runInHideRefMode(() => {
            model.count ++;
        });
        expect(moreThanThreeCount).toEqual(2);
        expect(yesOrNoCount).toEqual(1);
        
        runInHideRefMode(() => {
            model.count += 3;
        });
        expect(moreThanThreeCount).toEqual(3);
        expect(yesOrNoCount).toEqual(2);
    });
});