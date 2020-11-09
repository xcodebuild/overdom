# Getting Started

## Counter

```demo
export default function CounterApp() {
    const count = reactive(0);
    const inc = () => count(count() + 1);
    return <div>
        Counter: {count}
        <div>
            <button onClick={inc}>ADD</button>
        </div>
    </div>;
}
```
