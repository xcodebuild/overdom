import {
    h,
} from 'overdom';

class Logo {
    render() {
        return <img
            className="logo" 
        >
        </img>;
    }
}

export default class Header {
    render() {
        return <header id="header">
            <Logo />
        </header>
    };
}
