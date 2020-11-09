import { ReactiveHandler, Component, reactive, computed, h, component } from "resee";
import classnames from 'classnames';

import './index.less';

export default component<{
    code: string,
    component: Component,
}>(({
    code,
    component,
}) => {
    const selectedCode = reactive(true);

    const codeClass = computed(() => classnames({ active: selectedCode() }));
    const componentClass = computed(() => classnames({ active: !selectedCode() }));

    return <div className="codebox">
        <div className="header">
            <span onClick={() => selectedCode(true)} className={codeClass}>CODE</span>
            <span onClick={() => selectedCode(false)} className={componentClass}>RESULT</span>
        </div>
        <div>
            {code}
            {/* {component} */}
        </div>
    </div>;
});
