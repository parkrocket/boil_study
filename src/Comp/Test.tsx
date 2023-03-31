import { FC } from 'react';

type Props = {
  value: string;
};

const Test: FC<Props> = ({ value }) => {
  return <h1>Test Component: {value}</h1>;
};

export default Test;
