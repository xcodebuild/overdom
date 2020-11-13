import { h, reactive, render, autorun, $map, computed, $if } from "../src";
import { createReactive } from "../src/reactive";

let moreThanThreeCount = 0;
        let yesOrNoCount = 0;
        class Model {
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

        const model = createReactive(new Model());

        // @ts-ignore
        console.log(model.yesOrNo.value);
        model.count += 3;

        console.log(yesOrNoCount)

