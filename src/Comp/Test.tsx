import { FC } from 'react';

type Props = {
  value: '테스트 용입니다';
};

const Test: FC<Props> = ({ value }) => {
  return <h1>Test Component: {value}</h1>;
};

export default Test;
