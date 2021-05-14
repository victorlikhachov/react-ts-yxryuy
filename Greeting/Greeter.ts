import React from 'react';
import { usePatchReducer } from '../patch-reducer';
import { IGreetingProps } from './IGreetingProps';
import { IResponse } from './IResponse';
import { IResponseAction,ResponseReducerAction } from './IResponseAction';

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
      <h1 style={{ color: 'blue' }}>{greeting.message}</h1>
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
