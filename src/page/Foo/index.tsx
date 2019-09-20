import React, {
  useState,
  PureComponent,
  Component,
  useMemo,
  memo,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { Button } from 'antd-mobile';
import { func } from 'prop-types';

interface Props {
  defaultCount?: number;
  count?: number;
  onClick?: () => void;
}

class Counter extends PureComponent<Props> {
  render() {
    const { props } = this;
    return <h1>{props.count}</h1>;
  }
}

function useCount(defaultCount: any) {
  const [count, setCount] = useState(defaultCount);
  const it = useRef<any>();

  useEffect(() => {
    it.current = setInterval(() => {
      setCount((count: number) => count + 1 );
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current);
    }
  });

  return [count, setCount];
}

function Foo(props: any) {

  const [count, setCount] = useCount(0);

  return (
    <div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click ({count})
      </Button>
      <Counter count={count} />
    </div>
  );
}

export default Foo;
