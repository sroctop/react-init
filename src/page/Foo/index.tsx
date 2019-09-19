import React, { useState, PureComponent ,Component, useMemo, memo, useCallback, useRef } from 'react';
import { Button } from 'antd-mobile';

interface Props {
  defaultCount?: number;
  count?: number;
  onClick?: () => void;
  ref?: object;
}

const Four = memo(function Four(props: Props) {
  console.log('Counter render');
  return (
    <h1 onClick={props.onClick}>{props.count}</h1>
  )
});

function Foo(props: Props) {
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
      <Four ref={counterRef} count={double} onClick={onClick} />
    </div>
  );
}

export default Foo;
