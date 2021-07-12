import React from 'react';

/* export default ({ name: string }) => {
  console.log(name);
  return <h1>Hello - {name}!</h1>;
}; */
interface HelloState {
  name: string;
}

const hello: React.FC<HelloState> = state => {
  return <h1>{`Hello ${state.name}!`}</h1>;
};
export default hello;

/* export default (state: HelloState) => {
  console.log(state.name);
  return <h1>Hello {state.name}!</h1>;
}; */
