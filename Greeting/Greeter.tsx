import React from 'react';
import { usePatchReducer } from '../patch-reducer';
import { IGreetingProps } from './IGreetingProps';
import { IGreeting } from '../models/IGreeting';
import { IResponse } from './IResponse';
import { IResponseAction, ResponseReducerAction } from './IResponseAction';
import styled from 'styled-components';

const GreeterHeader = styled.h1`
  color: blue;

  &.pretty {
    font-style: italic;
    text-decoration: underline;
  }
`;

const Greeter: React.FC<IGreetingProps> = ({ greeting }) => {
  const responseReducer = (
    _state: IResponse,
    action: IResponseAction
  ): Partial<IResponse> => {
    const { actionType, payload } = action;
    switch (actionType) {
      case 'actor':
        return { actor: payload };
      case 'response':
        return { response: payload };
    }
  };
  const init = (init: IResponse): IResponse => {
    return init;
  };
  const [response, responseDispatch] = usePatchReducer(
    responseReducer,
    { response: '', actor: '' },
    init
  );

  return (
    <>
      <GreeterHeader className="pretty">
        {`'${greeting.sender}' says: ${greeting.message}`}
      </GreeterHeader>
      <input
        type="text"
        value={response.response}
        onChange={e =>
          responseDispatch({ actionType: 'response', payload: e.target.value })
        }
      />
    </>
  );
};

export default Greeter;
