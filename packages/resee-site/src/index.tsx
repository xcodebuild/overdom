import './index.less';
import Header from './components/header';
import { render,  h, reactive } from 'resee';

import DocGetStarted from './doc/get-started.md';

class App {
    render() {
        return <div className="page-container">
            <Header />
            <div>
                <div className="sidebar">
                </div>
                <div className="content">
                    <DocGetStarted/>
                </div>
            </div>
        </div>;
    }
}

render(<App />, document.getElementById('app'));
