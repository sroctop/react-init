import React, { useState, PureComponent, Component, useMemo, memo, useCallback, useRef, useEffect } from 'react';
import { Button } from 'antd-mobile';

interface Props {
  defaultCount?: number;
  count?: number;
  onClick?: () => void;
}

// const Four = memo(function Four(props: Props) {
//   console.log('Counter render');
//   return (
//     <h1 onClick={props.onClick}>{props.count}</h1>
//   )
// });

class Counter extends PureComponent <Props> {
  speak() {
    console.log(`now counter is: ${this.props.count}`);
  }
  render() {
    const { props } = this;
    return (
      <h1 onClick={props.onClick}>{props.count}</h1>
    )
  }
}

function Foo(props: any) {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const counterRef = useRef<any>();
  const it = useRef<any>();

  const double = useMemo(() => {
    return count * 2;
  }, [count === 3])

  const onClick = useCallback(() => {
    console.log('Click');
    setClickCount((clickCount) => clickCount + 1);

    counterRef.current.speak();
  }, [counterRef]);

  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if(count >= 10) {
      clearInterval(it.current);
    }
  })

  return (
    <div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click ({count}), double: ({double})
      </Button>
      <Counter ref={counterRef as any} count={double} onClick={onClick} />
    </div>
  );
}

export default Foo;
