import './index.less';
import Header from './components/header';
import { render,  h, reactive } from 'resee';

import DocGetStarted from './doc/get-started.md';

const App = () => {
    return <div className="page-container">
        <Header />
        <div className="content-container">
            <DocGetStarted/>
        </div>
    </div>;
}

render(<App />, document.getElementById('app'));
