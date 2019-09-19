import React, { useState, PureComponent, Component, useMemo, memo, useCallback, useRef } from 'react';
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

// class Four extends PureComponent <Props>{
//   render() {
//     const { props } = this;
//     return (
//       <h1 onClick={props.onClick}>{props.count}</h1>
//     )
//   }
// }

class Counter extends PureComponent <any> {
  render() {
    const { props } = this;
    window.console.log(props.ref);
    return (
      <h1 onClick={props.onClick}>{props.count}</h1>
    )
  }
}

function Foo(props: any) {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const counterRef = useRef();

  const double = useMemo(() => {
    return count * 2;
  }, [count === 3])

  const onClick = useCallback(() => {
    console.log('Click');
    setClickCount((clickCount) => clickCount + 1);

    console.log(counterRef.current);
  }, [counterRef]);

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
